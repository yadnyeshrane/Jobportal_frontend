import React from 'react'

function CivilServiceCards() {
  return (
    <div>
    <h5 className="card-title">
        {`firstname`}&nbsp;{`lastname`}
    </h5>
    <h6 className="card-title">{`headline`}</h6>
    <div className="d-flex">
        <p className="exp_range">
            <i className="bi bi-briefcase-fill" />
            {`job_exp`}
        </p>
        <p>
            |&nbsp;&nbsp;
            <i className="bi bi-geo-alt-fill" />
            {"Employee City"}
        </p>
    </div>
</div>
  )
}

export default CivilServiceCards