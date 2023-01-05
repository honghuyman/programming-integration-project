import React, { Component } from 'react';

export default class SearchBar extends Component
{
    render()
    {
        return (
            <div className="search-bar">
                <div className="search-input amount">
                    <p>Amount</p>
                    <input type="number" placeholder="0" />
                </div>

                <div className="search-input categories">
                    <p>Category</p>
                    <select name="categories" id="search-categories">
                        <option value="All">All</option>
                        <option value="_1">Category_1</option>
                        <option value="_2">Category_2</option>
                        <option value="_3">Category_3</option>
                    </select>
                </div>

                <div className="search-input date-from">
                    <p>From date</p>
                    <input type="date" />
                </div>

                <div className="search-input date-to">
                    <p>To date</p>
                    <input type="date" />
                </div>

                <div className="search-input note">
                    <p>Note</p>
                    <input type="text" autoComplete="true" />
                </div>

                <div className="icon icon-search">
                    <img src="https://cdn-icons-png.flaticon.com/512/151/151773.png" alt='search icon'/>
                </div>
            </div>
        )
    }
}

