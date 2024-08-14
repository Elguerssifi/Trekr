import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation'; // Import navigation styles
import 'swiper/css/pagination'; // Import pagination styles
import { Pagination, Navigation } from 'swiper/modules';
import styles from "./MiddleHomePage.module.css" 
import { MdVerified } from "react-icons/md";
import { FaHeart  , FaCommentDots} from "react-icons/fa";
import { SiSubstack } from "react-icons/si";
import { BsSendFill } from "react-icons/bs";

type Media = {
  id: number;
  type: string;
  url: string;
};

type Post = {
  id: number;
  content: string;
  createdAt: string;
  mediaUrls: Media[];
  user: {
    username: string;
    avatarUrl: string;
  };
};

type FeedProps = {
  posts: Post[];
};

const Feed: React.FC<FeedProps> = ({ posts }) => {
  return (
    <div>
      {posts.map((post , index) => (
        <div key={index} className={styles.feed_item}>
          <div className={styles.feed_header}>
            <div className={styles.user_info}>
              <div className={styles.user_info_image}>
                <img
                  src={post.user.avatarUrl} 
                  alt="User Avatar" 
                />
              </div>
              <div className={styles.username_area}>
                <span className={styles.username}>{post.user.username}</span>
                < MdVerified className={styles.verified_icon} />
                <span className={styles.created_at}>{new Date(post.createdAt).toLocaleTimeString([], { hour: '2-digit', hour12: false })}</span>
              </div>
            </div>
            <button className={styles.more_options}>•••</button>
          </div>

          <div className={styles.feed_content}>
            {post.mediaUrls.length > 0 && (
              <Swiper
                modules={[Pagination, Navigation]}
                spaceBetween={10}
                slidesPerView={1}
                pagination={{ clickable: true }}
                navigation
              >
                {post.mediaUrls.map((media , index) => (
                  media.type === 'image' && (
                    <SwiperSlide key={index}>
                      <img
                        src={media.url} 
                        alt="Post Image" 
                      />
                    </SwiperSlide>
                  )
                ))}
              </Swiper>
            )}
          </div>

          <div className={styles.feed_footer}>
            <div className={styles.actions}>
              <div className={styles.area_comment_like}>
                <div className={styles.display_actions}>
                  <span>10</span>
                  <button className={styles.comment_button}>
                    <FaCommentDots />
                  </button>
                </div>
                <div className={styles.display_actions}>
                  <span>10</span>
                  <button className={styles.like_button}>
                    <FaHeart />
                  </button>
                </div>
              </div>
            <div className={styles.area_share_save}>
              <button className={styles.share_button}>
                <BsSendFill />
              </button>
              <button className={styles.save_button}>
                <SiSubstack />
              </button>
            </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Feed;
