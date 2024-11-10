import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

import { neoScreenTypes } from '../../../types';

const NeoTable: neoScreenTypes.NeoTable = ({ info }) => {
    return (
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Close approach date</TableCell>
                        <TableCell>Miss distance (km)</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {info.map((item, index) => (
                        <TableRow key={index}>
                            <TableCell>{item.close_approach_date}</TableCell>
                            <TableCell>{item.miss_distance.kilometers}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default NeoTable;