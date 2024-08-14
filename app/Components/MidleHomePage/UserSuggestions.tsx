import styles from "./MiddleHomePage.module.css";
import UserSuggestion from "./UserSuggestion";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation'; // Import navigation styles

interface Suggestion {
  id: number;
  name: string;
  avatarUrl: string;
  description: string;
}

interface UserSuggestionsProps {
  suggestions: Suggestion[];
}

const UserSuggestions: React.FC<UserSuggestionsProps> = ({ suggestions }) => {
  return (
    <div className={styles.user_suggestions}>
      <div className={styles.title}>
        <p>Des suggestions pour vous</p>
      </div>
      <div className={styles.list_user_suggestions}>
        <Swiper
          modules={[Navigation]}
          slidesPerView={2.5} // Show 2 full slides and half of the third
          spaceBetween={4} // Adjust space between slides if needed
          pagination={{ clickable: true }} // Optional pagination
          navigation
        >
          {suggestions.map((suggestion , index) => (
            <SwiperSlide key={index}>
              <UserSuggestion
                name={suggestion.name}
                avatarUrl={suggestion.avatarUrl}
                description={suggestion.description}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default UserSuggestions;
