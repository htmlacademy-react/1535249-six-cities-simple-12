import { ChangeEvent, FormEvent, useState } from 'react';
import { useAppDispatch } from '../../hooks';
import { MIN_COMMENT_LENGTH, MAX_COMMENT_LENGTH} from '../../const';
import { ReviewData } from '../../types/review-data';
import { fetchAddNewComment, fetchCommentsAction } from '../../store/api-actions';

type ReviewsFormProps = {
  activeOfferId: number;
}

function ReviewsForm({activeOfferId}: ReviewsFormProps): JSX.Element {
  const dispatch = useAppDispatch();

  const [formData, setFormData] = useState({
    rating: '',
    review: '',
  });

  const [/*submitStatus*/, setSubmitStatus] = useState(false);

  const fieldChangeHandle = (evt: ChangeEvent <HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = evt.target;
    setFormData({...formData, [name]: value});
  };

  const isDisabled = () => formData.rating === '' &&
    formData.review.length < MIN_COMMENT_LENGTH &&
    formData.review.length > MAX_COMMENT_LENGTH;

  const onSubmit = ({ review, offerId }: ReviewData) => {
    dispatch(fetchAddNewComment({ review, offerId }));
    dispatch(fetchCommentsAction(offerId));
    setSubmitStatus(false);
  };

  const submitHandle = (evt: FormEvent <HTMLFormElement>) => {
    evt.preventDefault();
    setSubmitStatus(true);
    if (formData.rating !== '' && formData.review !== '') {
      onSubmit({
        offerId: activeOfferId,
        review: {
          comment: formData.review,
          rating: Number(formData.rating),
        }
      });
      setFormData({
        rating: '',
        review: '',
      });
    }
  };

  return (
    <form className="reviews__form form" action="#" method="post" onSubmit={submitHandle}>
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        <input
          className="form__rating-input visually-hidden"
          name="rating"
          value="5"
          id="5-stars"
          type="radio"
          checked={formData.rating === '5'}
          onChange={fieldChangeHandle}
        />
        <label htmlFor="5-stars" className="reviews__rating-label form__rating-label" title="perfect">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>

        <input
          className="form__rating-input visually-hidden"
          name="rating"
          value="4"
          id="4-stars"
          type="radio"
          checked={formData.rating === '4'}
          onChange={fieldChangeHandle}
        />
        <label htmlFor="4-stars" className="reviews__rating-label form__rating-label" title="good">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>

        <input
          className="form__rating-input visually-hidden"
          name="rating"
          value="3"
          id="3-stars"
          type="radio"
          checked={formData.rating === '3'}
          onChange={fieldChangeHandle}
        />
        <label htmlFor="3-stars" className="reviews__rating-label form__rating-label" title="not bad">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>

        <input
          className="form__rating-input visually-hidden"
          name="rating"
          value="2"
          id="2-stars"
          type="radio"
          checked={formData.rating === '2'}
          onChange={fieldChangeHandle}
        />
        <label htmlFor="2-stars" className="reviews__rating-label form__rating-label" title="badly">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>

        <input
          className="form__rating-input visually-hidden"
          name="rating"
          value="1"
          id="1-star"
          type="radio"
          checked={formData.rating === '1'}
          onChange={fieldChangeHandle}
        />
        <label htmlFor="1-star" className="reviews__rating-label form__rating-label" title="terribly">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>
      </div>
      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        value={formData.review}
        onChange={fieldChangeHandle}
      >
      </textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button
          className="reviews__submit form__submit button"
          type="submit"
          disabled={isDisabled()}
        >
          Submit
        </button>
      </div>
    </form>
  );
}

export default ReviewsForm;
