#!/bin/bash
set -e

echo "🔍 Loading environment variables..."
source <(grep -v '^#' .env.local | sed 's/^/export /')

echo "📋 Applying migrations..."

# Apply all SQL migrations in order
for file in drizzle/*.sql; do
  if [ -f "$file" ]; then
    echo "  → Applying $(basename $file)..."
    psql "$POSTGRES_URL_NON_POOLING" -f "$file"
  fi
done

echo "✅ Migrations complete!"