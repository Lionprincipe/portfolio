import React from 'react'
import './skil-rated.style.scss'
export const SkillRated = ({ label, rate }) => {
  return (
    <div >
      <div>
        <span>{`${rate} %`}</span> <span>{label}</span>
      </div>
      <div className="progress-container">
        <hr className="progress-bar" style={{ width: `${rate}%` }} />
      </div>

    </div>
  )
}

export default SkillRated
