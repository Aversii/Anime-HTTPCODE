import React from 'react';
import statusData from '@/app/data/HTTPTableStatus';
import HTTPCard from '../card/card';
import { Grid } from './styles';

const StatusGrid: React.FC = () => {
  return (
    <Grid>
      {statusData.map((status, index) => (
        <HTTPCard key={index} cardData={status} />
      ))}
    </Grid>
  );
};

export default StatusGrid;
