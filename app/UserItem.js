'use client';

import { useState, useCallback } from 'react';
import { Box, Select, MenuItem, IconButton, FormControl, TextField } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';

import UserNameInput from './UserNameInput';

const options = [
  { value: 'online', label: 'Online' },
  { value: 'offline', label: 'Offline' },
];

const UserItem = (props) => {
  const { id, name, status, onStatusChange = () => { }, onSaveUserName = () => { } } = props;
  const [isEditNameMode, setEditNameMode] = useState(false);

  const handleStatusChange = useCallback((event) => {
    onStatusChange(id, event.target.value);
  }, [onStatusChange, id]);

  const handleEditName = useCallback(() => {
    setEditNameMode(true);
  }, []);

  const handleSaveUserName = useCallback((userName) => {
    onSaveUserName(id, userName);
    setEditNameMode(false);
  }, [id, onSaveUserName]);

  const handleCancelEdit = useCallback(() => {
    setEditNameMode(false);
  }, []);

  const statusSelect = (
    <FormControl size="small">
      <Select
        value={status}
        onChange={handleStatusChange}
      >
        {options.map((options) => {
          return (
            <MenuItem key={options.value} value={options.value}>
              {options.label}
            </MenuItem>
          )
        })}
      </Select>
    </FormControl>
  );

  const nameInput = (
    <UserNameInput
      defaultUserName={name}
      onCancel={handleCancelEdit}
      onSaveUserName={handleSaveUserName}
    />
  );

  const nameDisplay = (
    <Box display="flex" alignItems="center">
      <Box>
        {name}
      </Box>
      <Box marginLeft={(theme) => theme.spacing(0.5)}>
        <IconButton size="small" onClick={handleEditName}>
          <EditIcon fontSize="inherit" />
        </IconButton>
      </Box>
    </Box>
  );

  return (
    <Box padding={(theme) => theme.spacing(1)} border="1px solid">
      <Box>
        {isEditNameMode ? nameInput : nameDisplay}
      </Box>
      <Box marginTop={(theme) => theme.spacing(0.5)} display="flex" alignItems="center">
        <Box>
          Status:
        </Box>
        <Box marginLeft={(theme) => theme.spacing(1)}>
          {statusSelect}
        </Box>
      </Box>
    </Box>
  );
};

export default UserItem;
