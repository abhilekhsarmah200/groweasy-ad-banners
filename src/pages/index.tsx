import React, { useState } from 'react';
import BannerImageComp from '../components/BannerImageComp';
import EditBannerTemplateBs from '../components/EditBannerTemplateBs';
import bannersData from '../data/banner.data.json';

const Home = () => {
  const [banners, setBanners] = useState(bannersData);
  const [editBanner, setEditBanner] = useState<any>(null);
  const [open, setOpen] = useState(false);

  const handleEdit = (banner: any) => {
    setEditBanner(banner);
    setOpen(true);
  };

  const handleSave = (updatedBanner: any) => {
    setBanners(
      banners.map((banner) =>
        banner.id === updatedBanner.id ? updatedBanner : banner
      )
    );
    setEditBanner(null);
    setOpen(false);
  };

  const handleClose = () => {
    setEditBanner(null);
    setOpen(false);
  };

  return (
    <div className='md:container m-[1rem]'>
      <div className='banner-flex'>
        {banners.map((banner) => (
          <BannerImageComp
            key={banner.id}
            {...banner}
            onEdit={() => handleEdit(banner)}
          />
        ))}
      </div>
      {editBanner && (
        <div className='editBanner'>
          <EditBannerTemplateBs
            banner={editBanner}
            onSave={handleSave}
            onClose={handleClose}
          />
        </div>
      )}
    </div>
  );
};

export default Home;
