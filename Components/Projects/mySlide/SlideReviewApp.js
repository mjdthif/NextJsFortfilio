
import Review from './Review';

import style from '../../../styles/project.module.scss';

function SlideReviewApp() {
  return (
    <main className={style.reviewMain}>
      <section className={style.reviewContainer}>
        <div className={style.title}>
        </div>
        <Review />
      </section>
    </main>
  );
}

export default SlideReviewApp;
