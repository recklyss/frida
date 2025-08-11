-- NextAuth.js required tables for Supabase
-- Based on: https://authjs.dev/reference/adapter/supabase

-- Users table (simplified for NextAuth + custom fields)
CREATE TABLE users (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name TEXT,
    email TEXT UNIQUE,
    email_verified TIMESTAMP WITH TIME ZONE,
    image TEXT,
    
    -- Custom fields for Frida's app
    is_admin BOOLEAN DEFAULT false,
    is_active BOOLEAN DEFAULT true,
    preferred_language VARCHAR(10) DEFAULT 'en' CHECK (preferred_language IN ('en', 'zh')),
    bio TEXT,
    
    -- Audit fields
    first_login_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    last_login_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    login_count INTEGER DEFAULT 1,
    
    -- Standard timestamps
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Accounts table for NextAuth OAuth providers
CREATE TABLE accounts (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    type TEXT NOT NULL,
    provider TEXT NOT NULL,
    provider_account_id TEXT NOT NULL,
    refresh_token TEXT,
    access_token TEXT,
    expires_at BIGINT,
    token_type TEXT,
    scope TEXT,
    id_token TEXT,
    session_state TEXT,
    
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    
    UNIQUE(provider, provider_account_id)
);

-- Sessions table for NextAuth session management
CREATE TABLE sessions (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    session_token TEXT UNIQUE NOT NULL,
    user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    expires TIMESTAMP WITH TIME ZONE NOT NULL,
    
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Verification tokens table for NextAuth
CREATE TABLE verification_tokens (
    identifier TEXT NOT NULL,
    token TEXT NOT NULL,
    expires TIMESTAMP WITH TIME ZONE NOT NULL,
    
    PRIMARY KEY (identifier, token)
);

-- Create indexes for performance
CREATE INDEX idx_users_email ON users(email);
CREATE INDEX idx_users_is_admin ON users(is_admin) WHERE is_admin = true;
CREATE INDEX idx_accounts_user_id ON accounts(user_id);
CREATE INDEX idx_accounts_provider ON accounts(provider, provider_account_id);
CREATE INDEX idx_sessions_user_id ON sessions(user_id);
CREATE INDEX idx_sessions_token ON sessions(session_token);
CREATE INDEX idx_sessions_expires ON sessions(expires);

-- Create triggers for timestamp updates
CREATE TRIGGER update_users_updated_at
    BEFORE UPDATE ON users
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_accounts_updated_at
    BEFORE UPDATE ON accounts
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_sessions_updated_at
    BEFORE UPDATE ON sessions
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();

-- Insert default admin user (replace with your Google account)
INSERT INTO users (
    name,
    email,
    email_verified,
    is_admin,
    bio
) VALUES (
    'Frida',
    'your-email@gmail.com', -- Replace with your actual Google email
    CURRENT_TIMESTAMP,
    true,
    'Website administrator and craft artist'
);

-- Create view for admin users
CREATE VIEW admin_users AS 
SELECT 
    id,
    name,
    email,
    image,
    first_login_at,
    last_login_at,
    login_count,
    created_at
FROM users 
WHERE is_admin = true AND is_active = true;

-- Add helpful comments
COMMENT ON TABLE users IS 'NextAuth users table with custom admin fields';
COMMENT ON TABLE accounts IS 'NextAuth OAuth provider accounts (Google)';
COMMENT ON TABLE sessions IS 'NextAuth session management';
COMMENT ON TABLE verification_tokens IS 'NextAuth verification tokens';
COMMENT ON COLUMN users.is_admin IS 'Flag for admin privileges - only pre-approved users can be admin';
COMMENT ON COLUMN users.is_active IS 'Account status - can be used to disable users';
