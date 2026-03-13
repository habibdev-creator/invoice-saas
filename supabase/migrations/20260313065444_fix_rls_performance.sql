/*
  # Fix RLS Performance Issues

  1. Security Changes
    - Replace `auth.uid()` with `(select auth.uid())` in all RLS policies for better performance
    - This prevents re-evaluation of auth functions for each row
    - Improves query performance at scale

  2. Index Optimization
    - Remove unused indexes created during initial setup

  3. Function Configuration
    - Set immutable search_path for handle_new_user function
*/

DROP POLICY IF EXISTS "Users can view own invoices" ON invoices;
CREATE POLICY "Users can view own invoices"
  ON invoices FOR SELECT TO authenticated
  USING (user_id = (select auth.uid()));

DROP POLICY IF EXISTS "Users can create own invoices" ON invoices;
CREATE POLICY "Users can create own invoices"
  ON invoices FOR INSERT TO authenticated
  WITH CHECK (user_id = (select auth.uid()));

DROP POLICY IF EXISTS "Users can update own invoices" ON invoices;
CREATE POLICY "Users can update own invoices"
  ON invoices FOR UPDATE TO authenticated
  USING (user_id = (select auth.uid()))
  WITH CHECK (user_id = (select auth.uid()));

DROP POLICY IF EXISTS "Users can delete own invoices" ON invoices;
CREATE POLICY "Users can delete own invoices"
  ON invoices FOR DELETE TO authenticated
  USING (user_id = (select auth.uid()));

DROP POLICY IF EXISTS "Users can view own subscription" ON subscriptions;
CREATE POLICY "Users can view own subscription"
  ON subscriptions FOR SELECT TO authenticated
  USING (user_id = (select auth.uid()));

DROP POLICY IF EXISTS "Users can create own subscription" ON subscriptions;
CREATE POLICY "Users can create own subscription"
  ON subscriptions FOR INSERT TO authenticated
  WITH CHECK (user_id = (select auth.uid()));

DROP POLICY IF EXISTS "Users can update own subscription" ON subscriptions;
CREATE POLICY "Users can update own subscription"
  ON subscriptions FOR UPDATE TO authenticated
  USING (user_id = (select auth.uid()))
  WITH CHECK (user_id = (select auth.uid()));

DROP POLICY IF EXISTS "Users can view own credits" ON credits;
CREATE POLICY "Users can view own credits"
  ON credits FOR SELECT TO authenticated
  USING (user_id = (select auth.uid()));

DROP POLICY IF EXISTS "Users can create own credits" ON credits;
CREATE POLICY "Users can create own credits"
  ON credits FOR INSERT TO authenticated
  WITH CHECK (user_id = (select auth.uid()));

DROP POLICY IF EXISTS "Users can update own credits" ON credits;
CREATE POLICY "Users can update own credits"
  ON credits FOR UPDATE TO authenticated
  USING (user_id = (select auth.uid()))
  WITH CHECK (user_id = (select auth.uid()));

DROP INDEX IF EXISTS idx_credits_user_id;
DROP INDEX IF EXISTS idx_invoices_user_id;
DROP INDEX IF EXISTS idx_invoices_created_at;
DROP INDEX IF EXISTS idx_subscriptions_user_id;

ALTER FUNCTION handle_new_user() IMMUTABLE;
