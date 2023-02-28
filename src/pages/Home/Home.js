import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import '../../assets/css/home.css';
import { newsRequest } from '../../redux/News/Action';
import { Skeleton } from "@mui/material";
import Item from "../../components/News/Item";
import Filter from "../../components/Filter/index";
import {objectToQueryString} from "../../constant/helpers";
import {useParams} from "react-router-dom";
import LoadMore from "../../components/Buttons/LoadMore";
import {getInterestRequest} from "../../redux/Interests/Action";
import NewsList from "../../components/Skeleton/News/List";

const Home = () => {

	const dispatch = useDispatch();
	const { slug } = useParams();
	const isLogin = useSelector((state) => state?.auth?.isLogin);
	const user = useSelector((state) => state?.auth?.user);
	const interests = useSelector((state) => state?.interests?.list);
	const news = useSelector((state) => state?.news?.list);
	const initial = {
		q: 'all',
		sources: `${(isLogin && interests.length > 0)? interests.reduce((prev,curr)=> prev+curr+',','')  : ''}`,
		language: '',
		category: `${(isLogin && user?.category)? user?.category : ''}`,
		from: '',
		to: '',
		pageSize : 18,
		page : 1,
	}

	const [form, setForm] = useState({ ...initial });
	const [loading, setLoading] = useState(false);

	const get = async (query = form) => {
		setLoading(true);
		await dispatch(newsRequest({
			...query,
			sources : (query?.category)? '' : query?.sources,
			category : (query?.category)? query?.category : ''
		}));
		setLoading(false);
	}

	const paginationHandler = (type)=>{
		setForm((prevState) =>{
			get({ ...prevState , page : (type === "+")?prevState?.page + 1 : prevState?.page - 1 });
			return { ...prevState , page : (type === "+")?prevState?.page + 1 : prevState?.page - 1 };
		});
	}

	useEffect(() => {
		get();
		if(isLogin) dispatch(getInterestRequest());
		return () => {
		}
	}, [slug])

	return (
		<div className="Home py-4">
			{/* catergories */}

			{/* news section */}
			<div className="container">
				<div className="row">

					<Filter initial={initial} get={get} form={form} setForm={setForm} />

					<div className="col-lg-9">
						{loading ?
							<div className="row">
								<NewsList />
							</div>
							:
							<div className="row ">
								{
									news.map((item, index) => {
										return (
											<Item key={index} item={item} />
										)
									})
								}
							</div>
						}

						<LoadMore form={form} load={paginationHandler} />
					</div>
				</div>
			</div>
		</div >
	);
};

export default Home;