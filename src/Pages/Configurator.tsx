// import { useState } from 'react';
// import { Grid, Paper } from '@mui/material';
// // import MainSelectionBox from '../components/Configurator/MainSelectionBox';
// // import SelectedItemsList from '../components/Configurator/SelectedItemsList';
// // import SelectedItemPanel from '../components/Configurator/SelectedItemPanel';
// // import { iItem } from '../components/Configurator/types';

// const PcConfigurator = () => {
//   const [selectedItems, setSelectedItems] = useState<iItem[]>([]);
//   const [currentItem, setCurrentItem] = useState<iItem | null>(null);

//   const handleAddItem = (item: iItem) => {
//     setSelectedItems((prevSelectedItems) => [...prevSelectedItems, item]);
//     setCurrentItem(item);
//   };

//   const handleRemoveItem = (item: iItem) => {
//     setSelectedItems((prevSelectedItems) =>
//       prevSelectedItems.filter((selectedItem) => selectedItem.id !== item.id)
//     );
//     setCurrentItem(null);
//   };

//   const handleCheckout = () => {
//     // Implement checkout functionality here
//   };

//   return (
//     <div className="pc-configurator">
//       <Grid container spacing={2}>
//         <Grid item xs={12} md={8}>
//           <Paper className="main-selection-box" sx={{ height: "calc(100vh - 64px)", overflow: "auto" }}>
//             {/* @ts-ignore */}
//             <MainSelectionBox onSelectItem={handleAddItem(currentItem)} />
//           </Paper>
//         </Grid>
//         <Grid item xs={12} md={4}>
//           {/* <SelectedItemPanel selectedItem={currentItem} onRemoveItem={handleRemoveItem} /> */}
//         </Grid>
//         <Grid item xs={12}>
//           {/* <SelectedItemsList
//             selectedItems={selectedItems}
//             totalPrice={selectedItems.reduce((total, item) => total + item.price, 0)}
//             onCheckout={handleCheckout}
//           /> */}
//         </Grid>
//       </Grid>
//     </div>
//   );
// };

// export default PcConfigurator;

export {}