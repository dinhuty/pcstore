import Banner from '@/app/components/Home/Banner';
import Card from '@/app/components/common/Card';
import { Grid, Stack, Typography } from '@mui/material';
import { products } from '@/Mockdata/product';

export default function Home() {
  return (
    <main>
      <Stack direction="column" spacing={3} justifyItems="center">
        <Banner />
        <Stack spacing={2}>
          <Typography variant="h5">Danh sách bán chạy</Typography>
          <Grid container>
            {products.map((product, index) => {
              return (
                <Grid
                  key={product.id}
                  item
                  xs={6}
                  md={4}
                  lg={3}
                  sx={{
                    padding: '0px 5px',
                    marginBottom: '7px'
                  }}
                >
                  <Card product={product} />
                </Grid>
              );
            })}
          </Grid>
        </Stack>
      </Stack>
    </main>
  );
}
