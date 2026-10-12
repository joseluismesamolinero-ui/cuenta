-- Cuenta: datos aislados por usuario autenticado.
create table if not exists public.fields (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null default auth.uid() references auth.users(id) on delete cascade,
  name text not null check (char_length(name) between 1 and 28),
  folder text not null default '',
  emoji text not null default '✳',
  image text,
  created_at timestamptz not null default now(),
  constraint fields_id_user_unique unique (id, user_id)
);

create table if not exists public.events (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null default auth.uid() references auth.users(id) on delete cascade,
  field_id uuid not null,
  created_at timestamptz not null default now(),
  constraint events_field_owner_fk
    foreign key (field_id, user_id)
    references public.fields (id, user_id)
    on delete cascade
);

create index if not exists events_user_created_at_idx
  on public.events (user_id, created_at);
create index if not exists events_user_field_idx
  on public.events (user_id, field_id, created_at);
create index if not exists fields_user_created_at_idx
  on public.fields (user_id, created_at desc);

alter table public.fields enable row level security;
alter table public.events enable row level security;

-- Tables are not exposed to Data API roles by default on new projects.
-- Give access only to signed-in users; RLS below further limits ownership.
revoke all on table public.fields, public.events from anon, authenticated;
grant usage on schema public to authenticated;
grant select, insert, update, delete on table public.fields, public.events to authenticated;

drop policy if exists "Users read own fields" on public.fields;
drop policy if exists "Users add own fields" on public.fields;
drop policy if exists "Users edit own fields" on public.fields;
drop policy if exists "Users delete own fields" on public.fields;
drop policy if exists "Users read own events" on public.events;
drop policy if exists "Users add own events" on public.events;
drop policy if exists "Users edit own events" on public.events;
drop policy if exists "Users delete own events" on public.events;

create policy "Users read own fields" on public.fields
  for select to authenticated
  using ((select auth.uid()) = user_id);
create policy "Users add own fields" on public.fields
  for insert to authenticated
  with check ((select auth.uid()) = user_id);
create policy "Users edit own fields" on public.fields
  for update to authenticated
  using ((select auth.uid()) = user_id)
  with check ((select auth.uid()) = user_id);
create policy "Users delete own fields" on public.fields
  for delete to authenticated
  using ((select auth.uid()) = user_id);

create policy "Users read own events" on public.events
  for select to authenticated
  using ((select auth.uid()) = user_id);
create policy "Users add own events" on public.events
  for insert to authenticated
  with check ((select auth.uid()) = user_id);
create policy "Users edit own events" on public.events
  for update to authenticated
  using ((select auth.uid()) = user_id)
  with check ((select auth.uid()) = user_id);
create policy "Users delete own events" on public.events
  for delete to authenticated
  using ((select auth.uid()) = user_id);
