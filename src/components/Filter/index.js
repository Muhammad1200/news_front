import React from 'react';
import {onInputChangeHandler} from '../../constant/helpers';
import {CATEGORIES} from "../../constant/Variables";

const Index = ({ initial , get, form, setForm }) => {

    const onSubmitHandler = (e) => {
        e.preventDefault();
        get(form);
    }

    const reset = () => {
        setForm(initial);
        get(initial);
    }

    return (
        <div className="col-lg-3">
            <div className="card filter_card py-2 px-1">
                <div className="card-heading  text-center">
                    <h3>Apply Filters</h3>
                </div>
                <div className="card-body">
                    <form onSubmit={onSubmitHandler}>
                        <label htmlFor="keywords">Keywords</label>
                        <div className="search">
                            <input
                                type="text" name="q"
                                placeholder="Search"
                                className="form-control"
                                // defaultValue={form?.q}
                                value={form?.q || ''}
                                onChange={(e) => onInputChangeHandler(e, setForm)}
                            />
                        </div>
                        <div className="filter">
                            <div className="form-group">
                                <label htmlFor="sources">sources</label>
                                <select
                                    className="form-control my-select-drop-icon"
                                    id="sources"
                                    name="sources"
                                    // defaultValue={form?.sources}
                                    value={form?.sources || ''}
                                    onChange={(e) => onInputChangeHandler(e, setForm)}
                                >
                                    <option selected="" value={''}>Select Sources</option>
                                    <option value={'bbc-news'}>BBC News</option>
                                    <option value={'new-york-magazine'}>New York Magazine</option>
                                    <option value={'the-globe-and-mail'}>The Guardian</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label htmlFor="category">Category</label>
                                <select
                                    className="form-control my-select-drop-icon"
                                    id="category"
                                    name="category"
                                    // defaultValue={form?.category}
                                    value={form?.category || ''}
                                    onChange={(e) => onInputChangeHandler(e, setForm)}
                                >
                                    <option selected="" value={''}>Select Category</option>
                                    {
                                        CATEGORIES?.map((val,key)=>(
                                            <option key={key} value={val}>{val}</option>
                                        ))
                                    }
                                </select>
                            </div>
                            <div className="form-group">
                                <label htmlFor="from">From Date</label>
                                <input type={"date"}
                                       className="form-control my-select-drop-icon"
                                       id="from"
                                       name="from"
                                       value={form?.from || ''}
                                       // defaultValue={form?.from}
                                       onChange={(e) => onInputChangeHandler(e, setForm)}/>
                            </div>

                            <div className="form-group">
                                <label htmlFor="to">To Date</label>
                                <input
                                    type={"date"}
                                    className="form-control my-select-drop-icon"
                                    id="to"
                                    name="to"
                                    value={form?.to || ''}
                                    // defaultValue={form?.to}
                                    onChange={(e) => onInputChangeHandler(e, setForm)}/>
                            </div>

                            <button className="btn btn-info form-control my-1" type={"submit"}>
                                Apply Filters
                            </button>

                            <button onClick={reset} className="btn btn-dark form-control my-1" type={"button"}>
                                Reset Filters
                            </button>
                        </div>
                    </form>
                </div>

            </div>
        </div>
    )
}

export default Index;