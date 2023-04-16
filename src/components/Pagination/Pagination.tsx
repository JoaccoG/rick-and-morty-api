import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';
import './Pagination.css';
import useAppHook from '../../hooks/useAppHook';
import { FC, useContext } from 'react';
import AppContext from '../../store/contexts/app.context';

interface PaginationProps {
  typeOfPagination: 'planets' | 'characters';
}

const Pagination: FC<PaginationProps> = ({ typeOfPagination }) => {
  const { planetsPagination, charactersPagination } = useAppHook();
  const { state } = useContext(AppContext);
  const { currentPageCharacters, currentPagePlanets } = state;

  return (
    <div className="pagination__container" data-testid="pag-container">
      <FontAwesomeIcon
        data-testid="button-left"
        className="pagination__item"
        icon={solid('angle-left')}
        onClick={() => {
          typeOfPagination === 'planets'
            ? planetsPagination('prev')
            : charactersPagination('prev');
        }}
      />
      <div className="pagination__page-number-container">
        <p className="pagination__page-number">{`${
          typeOfPagination === 'planets'
            ? currentPagePlanets
            : currentPageCharacters
        }`}</p>
      </div>
      <FontAwesomeIcon
        data-testid="button-right"
        className="pagination__item"
        icon={solid('angle-right')}
        onClick={() => {
          typeOfPagination === 'planets'
            ? planetsPagination('next')
            : charactersPagination('next');
        }}
      />
    </div>
  );
};

export default Pagination;
