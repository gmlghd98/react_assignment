import {
  Box,
  Drawer,
  List,
  Divider,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import UnarchiveIcon from '@mui/icons-material/Unarchive';
import InventoryIcon from '@mui/icons-material/Inventory';
import ArchiveIcon from '@mui/icons-material/Archive';
import ReceiptIcon from '@mui/icons-material/Receipt';
import HandshakeIcon from '@mui/icons-material/Handshake';
import SettingsIcon from '@mui/icons-material/Settings';

const NavigationItem = (props) => {
  return (
    <ListItem disablePadding>
      <ListItemButton>
        <ListItemIcon>{props.icon}</ListItemIcon>
        <ListItemText primary={props.text} />
      </ListItemButton>
    </ListItem>
  );
};

const NavigationDrawer = (props) => {
  return (
    <Drawer open={props.open} onClose={props.onClose}>
      <Box sx={{ width: 250 }} role="presentation">
        <List>
          <NavigationItem text="Inbound" icon={<ArchiveIcon />} />
          <NavigationItem text="Inventory" icon={<InventoryIcon />} />
          <NavigationItem text="Outbound" icon={<UnarchiveIcon />} />
        </List>
        <Divider />
        <List>
          <NavigationItem text="Invoice" icon={<ReceiptIcon />} />
          <NavigationItem text="Customer" icon={<HandshakeIcon />} />
          <NavigationItem text="Setting" icon={<SettingsIcon />} />
        </List>
      </Box>
    </Drawer>
  );
};

export default NavigationDrawer;
