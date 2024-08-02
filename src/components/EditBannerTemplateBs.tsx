import React, { ChangeEvent, useEffect, useState, useRef } from 'react';
import {
  Drawer,
  TextField,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  Slide,
  IconButton,
  styled,
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import CloseIcon from '@mui/icons-material/Close';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import bannersData from '../data/banner.data.json';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import { TransitionProps } from '@mui/material/transitions';

type EditBannerTemplateProps = {
  banner: any;
  onSave: (updatedBanner: any) => void;
  onClose: () => void;
};

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction='up' ref={ref} {...props} />;
});

const EditBannerTemplateBs: React.FC<EditBannerTemplateProps> = ({
  banner,
  onSave,
  onClose,
}) => {
  const [editedBanner, setEditedBanner] = useState(banner);
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const bannerRef = useRef(null);

  useEffect(() => {
    setEditedBanner({ ...editedBanner });
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setEditedBanner({ ...editedBanner, [name]: value });
  };

  const handleImageUpload = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      setSelectedImage(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setEditedBanner({ ...editedBanner, image: reader.result as string });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleImageSelect = (image: string) => {
    setEditedBanner({ ...editedBanner, image });
  };

  const handleSave = () => {
    onSave(editedBanner);
  };

  const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
  });

  return (
    <Dialog
      open={banner}
      TransitionComponent={Transition}
      keepMounted
      onClose={onClose}
      aria-describedby='alert-dialog-slide-description'
    >
      <DialogTitle className='text-center font-bold text-[1.5rem]'>
        {'Edit Banner'}
      </DialogTitle>
      <IconButton
        aria-label='close'
        onClick={onClose}
        sx={{
          position: 'absolute',
          right: 8,
          top: 8,
          color: (theme) => theme.palette.grey[500],
        }}
      >
        <CloseIcon />
      </IconButton>

      <DialogContent>
        <DialogContentText id='alert-dialog-slide-description'>
          <div className=' w-full flex justify-center mx-auto'>
            <div
              style={{
                backgroundImage: `url(${editedBanner?.background})`,
                padding: '20px',
                marginBottom: '20px',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'contain',
                overflow: 'hidden',
              }}
              className={`${editedBanner?.className} relative md:w-[25rem] md:h-[25rem] sm:w-[23rem] sm:h-[23rem] w-[20rem] h-[20rem]`}
            >
              <div className='absolute inset-0 bg-black opacity-20 z-50'></div>
              <h2 className='sm:text-[1.8rem] text-[1.4rem] relative z-30 mt-1 w-[100%]'>
                {editedBanner?.title}
              </h2>
              <p className='relative z-30 mt-4 sm:text-[1rem] text-[0.8rem]'>
                {editedBanner?.description}
              </p>
              {editedBanner?.cta !== '' && (
                <div
                  className={`${
                    editedBanner?.uid === 'templates5'
                      ? 'absolute sm:bottom-[2.4rem] bottom-[1.8rem] left-[4rem]'
                      : editedBanner?.uid === 'templates9'
                      ? 'absolute bg-yellow-400 bottom-12'
                      : editedBanner?.uid === 'templates1'
                      ? 'w-fit bg-yellow-400 mt-[2rem]'
                      : 'absolute bg-yellow-400 bottom-[5rem] right-[2rem]'
                  } ${
                    editedBanner?.uid === 'templates5' &&
                    'bg-transparent border-none hover:bg-transparent'
                  }  px-2 py-1 rounded-md sm:text-[0.8rem] text-[0.7rem] text-black font-bold border border-black`}
                >
                  {editedBanner?.cta}
                </div>
              )}
              <div className='px-[2rem]'>
                <img
                  className={`absolute ${
                    editedBanner?.uid === 'templates5'
                      ? 'md:top-[11rem] sm:top-[10.3rem] top-[8.8rem] md:left-[3.6rem] sm:left-[3.25rem] left-[3rem] z-10 md:w-[17.8rem] sm:w-[16.5rem] md:h-[10rem] sm:h-[9rem] h-[8rem] w-[14rem] '
                      : editedBanner?.uid === 'templates9'
                      ? 'top-[7rem] right-[3rem] rounded-full md:w-[11rem] sm:w-[9rem] md:h-[11rem] sm:h-[9rem] w-[8rem] h-[8rem] z-10'
                      : editedBanner?.uid === 'templates1'
                      ? 'sm:top-[9rem] top-[7.5rem] md:-right-[5rem] sm:-right-[4rem] -right-[3.5rem] rounded-full md:w-[18rem] sm:w-[16rem] sm:h-[16rem] w-[14rem] h-[14rem] md:h-[18rem] z-10 '
                      : 'md:top-[11.5rem] sm:top-[10.5rem] top-[9.2rem] sm:left-[1.2rem] left-[1rem] rounded-full md:w-[12rem] md:h-[12rem] sm:w-[11rem] sm:h-[11rem] w-[9.5rem] h-[9.5rem]'
                  }`}
                  src={editedBanner?.image}
                  alt={editedBanner?.title}
                />
              </div>
            </div>
          </div>
          <div style={{ padding: '20px' }}>
            <div className='flex gap-2 overflow-scroll'>
              <div>
                <Button
                  component='label'
                  role={undefined}
                  variant='contained'
                  tabIndex={-1}
                  className='w-[5rem]  bg-gray-400 hover:bg-gray-300 h-[5rem] rounded-full'
                >
                  <FileUploadIcon />
                  <VisuallyHiddenInput
                    onChange={handleImageUpload}
                    accept='image/*'
                    type='file'
                  />
                </Button>
              </div>

              {bannersData.map((item, idx) => (
                <img
                  key={idx}
                  src={item?.image}
                  alt={`Option ${idx}`}
                  className='w-[5rem] h-[5rem] rounded-full cursor-pointer'
                  onClick={() => handleImageSelect(item?.image)}
                  style={{
                    border:
                      editedBanner.image === item?.image
                        ? '2px solid blue'
                        : 'none',
                  }}
                />
              ))}
            </div>
            <TextField
              label='Image URL'
              name='image'
              value={editedBanner.image}
              onChange={handleChange}
              fullWidth
              margin='normal'
              disabled
            />
            <TextField
              label='Title'
              name='title'
              value={editedBanner.title}
              onChange={handleChange}
              fullWidth
              margin='normal'
            />
            <TextField
              label='Description'
              name='description'
              value={editedBanner.description}
              onChange={handleChange}
              fullWidth
              margin='normal'
            />
            <TextField
              label='Button Text'
              name='cta'
              value={editedBanner.cta}
              onChange={handleChange}
              fullWidth
              margin='normal'
            />

            <div className='flex flex-col gap-2 w-full justify-end'>
              <Button
                variant='contained'
                color='success'
                onClick={handleSave}
                style={{ width: '100%' }}
                startIcon={<CheckCircleIcon />}
              >
                Done
              </Button>
              <Button
                variant='outlined'
                color='error'
                onClick={onClose}
                style={{ width: '100%' }}
                startIcon={<CloseIcon />}
              >
                Close
              </Button>
            </div>
          </div>
        </DialogContentText>
      </DialogContent>
    </Dialog>
  );
};

export default EditBannerTemplateBs;
