"use client";

import { useState, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Pagination, Navigation } from 'swiper/modules';
import styles from './SideBarMenu.module.css';

interface PopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const CreatePopup: React.FC<PopupProps> = ({ isOpen, onClose }) => {
  const [images, setImages] = useState<File[]>([]);
  const [previewImages, setPreviewImages] = useState<string[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const files = Array.from(e.target.files);
      const newImages = files.map(file => URL.createObjectURL(file));
      setPreviewImages(prev => [...prev, ...newImages]);
      setImages(prev => [...prev, ...files]);
    }
  };

  const handleCancelImage = (index: number) => {
    setPreviewImages(prev => prev.filter((_, i) => i !== index));
    setImages(prev => prev.filter((_, i) => i !== index));
  };

  const handlePublish = () => {
    console.log("Publishing images:", images);
  };

  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  if (!isOpen) return null;

  return (
    <div className={styles.popupOverlay} onClick={onClose}>
      <div className={styles.popupContent} onClick={(e) => e.stopPropagation()}>
        <div className={styles.popup_header}>
          <button className={styles.closeButton} onClick={onClose}>
            x
          </button>
          <h5>Créer une nouvelle publication</h5>
        </div>
        <div className={styles.popup_body}>
          {previewImages.length > 0 ? (
            <div className={styles.slides_container}>
              <Swiper
                modules={[Pagination, Navigation]}
                spaceBetween={10}
                slidesPerView={1}
                pagination={{ clickable: true }}
                navigation
              >
                {previewImages.map((image, index) => (
                  <SwiperSlide key={index}>
                    <div className={styles.imageWrapper}>
                      <img src={image} alt={`Upload ${index}`} className={styles.previewImage} />
                      <button className={styles.cancelButton} onClick={() => handleCancelImage(index)}>
                        X
                      </button>
                    </div>
                  </SwiperSlide>
                ))}
                {/* Final slide with publish button */}
                <SwiperSlide>
                  <div className={styles.publishWrapper}>
                    <button className={styles.publishButton} onClick={handlePublish}>
                      Publier
                    </button>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          ) : (
            <div className={styles.placeholder}>
              <img 
                src="https://s3-alpha-sig.figma.com/img/5139/b237/1c40fd0e14d58c324a5388109df27c76?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UBzwMpQrt-HNgBaxGoWILkhHlIj26KUVyYpyRqVVitS7RDUFmD1FQJEw5g6L0ucGoK4AGSR509rAZ79TeHa10C71dXiCzxWLzZUwcXYxCVXpdnILYlG56V2gM0snhWYDkMcYJ7VFHChzGP2cj8ESdHSIVj7DRX3QQ2HxEgfOnbZDiL6427bCoZRmZZ~j0jW6HPx82XEbsPdSlZBQjTpib6BFcVUhsY69kg-T1sZMAF5DBvcF2K~oggkftwjRQbRvmVssSJ8o0V6NfndAaPo9uf1xjY6SRn5215SY5x8Z5dc6hW8Jfir81ozUsW7XYmcdCcUsfV1dTDxFnOTrWLKWcQ__" 
                alt="preview image" 
              />
              <p>
                Aucune image sélectionnée
              </p>
            </div>
          )}
          <div className={styles.input_images}>
            <button type="button" className={styles.customButton} onClick={triggerFileInput}>
              Sélectionner depuis l'ordinateur
            </button>
            <input
              type="file"
              accept="image/*"
              multiple
              onChange={handleImageChange}
              className={styles.fileInput}
              ref={fileInputRef}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatePopup;
