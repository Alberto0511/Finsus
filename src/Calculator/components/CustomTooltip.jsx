import { ReactComponent as StartTruckIcon } from '../../public/StartTruckIcon.svg';

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip">
        <StartTruckIcon whith={20} height={20} />
      </div>
    );
  }
};
