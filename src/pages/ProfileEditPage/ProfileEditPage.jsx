import React, { useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { useNavigate } from 'react-router-dom';

const ProfileEditPage = () => {
  const { user, getAccessTokenSilently } = useAuth0();
  const [displayName, setDisplayName] = useState('');
  const navigate = useNavigate();

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const token = await getAccessTokenSilently({
        audience: 'https://dev-e6aokm5atm7izdmv.us.auth0.com/api/v2/',
      });

      await fetch(`https://dev-e6aokm5atm7izdmv.us.auth0.com/api/v2/users/${user.sub}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify({
          user_metadata: {
            display_name: displayName,
          },
        }),
      });

      // Refresh the access token
      await refreshAccessToken();

      console.log('Profile updated successfully!');
      navigate('/'); // Redirect to home page
    } catch (error) {
      console.error('Failed to update profile:', error);
    }
  };

  // Function to refresh the token
  const refreshAccessToken = async () => {
    try {
      await getAccessTokenSilently({ force: true });
    } catch (error) {
      console.error('Failed to refresh token:', error);
    }
  };

  return (
    <div>
      <h1>Edit Profile</h1>
      <form onSubmit={handleFormSubmit}>
        <label>
          Display Name:
          <input
            type="text"
            value={displayName}
            onChange={(e) => setDisplayName(e.target.value)}
          />
        </label>
        <button type="submit">Save Changes</button>
      </form>
    </div>
  );
};

export default ProfileEditPage;
