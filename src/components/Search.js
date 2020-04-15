import React from 'react'
import PropTypes from 'prop-types'

export default function Search(props) {
    return (
        <div>
            <form className="ui form">
                <div className="field">
                    <input
                        onChange={props.handleChange}
                        type="text"
                        placeholder="Search.. by subject"
                        value={props.searchTerm}
                    />
                </div>
            </form>
        </div>
    )
}
Search.propTypes = {
    onChange: PropTypes.func,
    searchTerm: PropTypes.arrayOf(
        PropTypes.shape({
            author: PropTypes.string.isRequired,
            subject: PropTypes.string.isRequired,
            article: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired
        })
    )
}
