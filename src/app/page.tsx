import Banner from '@/app/components/Home/Banner';
import Card from '@/app/components/common/Card';
import { Grid, Stack } from '@mui/material';
import { products } from '@/Mockdata/product';
import Heading from '@/app/components/common/Heading';
import Image from 'next/image';
import PcSite from '@/app/components/Home/PcSite';

export default function Home() {
  return (
    <main>
      <Stack direction="column" spacing={3} justifyItems="center">
        <Banner />
        <Stack spacing={2}>
          <Heading title="PC - CHƠI GAME, HỌC TẬP" />
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
        <Image
          src={'/images/bn.jpg'}
          width="0"
          height="0"
          sizes="100vw"
          style={{ width: '100%', height: 'auto' }}
          alt="banner"
        />
        <Stack spacing={2}>
          <Heading title="BÁN CHẠY" />
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
        <PcSite />
      </Stack>
    </main>
  );
}
