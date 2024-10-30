'use client';

import { useState, useCallback } from 'react';
import { Box, Select, MenuItem } from '@mui/material';

const options = [
  { value: 'online', label: 'Online' },
  { value: 'offline', label: 'Offline' },
];

const UserItem = (props) => {
  const { id, name, status, onStatusChange = () => { } } = props;

  const handleStatusChange = useCallback((event) => {
    onStatusChange(id, event.target.value);
  }, [onStatusChange, id]);

  const statusSelect = (
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
  )

  return (
    <Box padding={(theme) => theme.spacing(1)} border="1px solid">
      <Box>
        {name}
      </Box>
      <Box marginTop={(theme) => theme.spacing(0.5)}>
        <Box component="span">
          Status:
        </Box>
        <Box component="span" marginLeft={(theme) => theme.spacing(1)}>
          {statusSelect}
        </Box>
      </Box>
    </Box>
  );
};

export default UserItem;
