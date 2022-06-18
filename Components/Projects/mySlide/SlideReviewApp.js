import React from 'react';
import Review from './Review';
import '../project.scss';
function SlideReviewApp() {
  return (
    <main className='review-main'>
      <section className='review-container'>
        <div className='title'>
        </div>
        <Review />
      </section>
    </main>
  );
}

export default SlideReviewApp;
