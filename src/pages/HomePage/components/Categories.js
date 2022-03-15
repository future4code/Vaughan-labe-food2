import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

export default function Categories(props) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const categories = props.restaurantsList && props.restaurantsList.map((restaurant) => {
    return <Tab label={restaurant.category} key={restaurant.id} onClick={() => props.setCategory(restaurant.category)}/>
  })

  return (
    <Box sx={{ width: '328px'}}>
      <Tabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons={false}
        aria-label="scrollable prevent tabs example"
      >
        <Tab label={'TODOS'} onClick={() => props.setCategory('')}/>
        {categories}
      </Tabs>
    </Box>
  );
}
