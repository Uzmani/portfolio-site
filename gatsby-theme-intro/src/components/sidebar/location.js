import React from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { ProfileType } from '../../types';

const Location = ({ location, relocation }) => (
  <>
    <div className="inline-flex items-center mt-6 w-auto">
      <span className="border-r-2 border-back px-3">
        <FaMapMarkerAlt className="h-4 w-4" />
      </span>
      {/* <span>|</span> */}
      <span className="font-header font-bold py-1 text-lg">{location}</span>
    </div>
    {relocation && (
      <div className="text-xs uppercase mt-2 font-semibold text-front font-header">
        Available for relocation
      </div>
    )}
  </>
);

Location.propTypes = {
  location: ProfileType.location,
  relocation: ProfileType.relocation,
};

export default Location;
