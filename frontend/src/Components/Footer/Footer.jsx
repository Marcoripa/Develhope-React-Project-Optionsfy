import React from 'react';
import 'antd/dist/antd.min.css';
import 'font-awesome/css/font-awesome.min.css';
import './footer.css';
import { Row, Col } from 'antd';
import { Form, Input, Button } from 'antd';

export default function Footer() {
	const onFinish = (values) => {
		console.log('Success:', values);
	};

	const onFinishFailed = (errorInfo) => {
		console.log('Failed:', errorInfo);
	};

	return (
		<footer>
			<section className='footer-grid'>
				<Row align='top' justify='center' gutter={[48, 36]}>
					<Col xs={24} sm={24} md={12} lg={7} xl={7} xxl={7}>
						<section className='footer-col1'>
							<section>
								<h2 className='logo'>Logo</h2>
								<p>
									Lorem ipsum dolor sit amet consectetur adipisicing elit.
									Maxime mollitia.
								</p>
							</section>
							<section className='social-container'>
								<a href='/'>
									<i className='fa fa-facebook'></i>
								</a>
								<a href='/'>
									<i className='fa fa-instagram'></i>
								</a>
								<a href='/'>
									<i className='fa fa-twitter'></i>
								</a>
								<a href='/'>
									<i className='fa fa-linkedin'></i>
								</a>
							</section>
						</section>
					</Col>

					<Col
						xs={12}
						sm={8}
						md={{ span: 8, order: 3 }}
						lg={{ span: 4, order: 2 }}
						xl={3}
						xxl={3}
					>
						<h2>Product</h2>
						<ul className='footer-ul'>
							<li>
								<a href='#features'>Features</a>
							</li>
							<li>
								<a href='#pricing'>Pricing</a>
							</li>
							<li>
								<a href='/'>API</a>
							</li>
							<li>
								<a href='/'>Interest</a>
							</li>
						</ul>
					</Col>

					<Col
						xs={12}
						sm={8}
						md={{ span: 8, order: 4 }}
						lg={{ span: 3, order: 3 }}
						xl={3}
						xxl={3}
					>
						<h2>Markets</h2>
						<ul className='footer-ul'>
							<li>
								<a href='/'>Futures</a>
							</li>
							<li>
								<a href='/'>Indices</a>
							</li>
							<li>
								<a href='/'>Shares</a>
							</li>
							<li>
								<a href='/'>Metals</a>
							</li>
						</ul>
					</Col>

					<Col
						xs={24}
						sm={8}
						md={{ span: 8, order: 5 }}
						lg={{ span: 4, order: 4 }}
						xl={4}
						xxl={4}
					>
						<h2>Resources</h2>
						<ul className='footer-ul'>
							<li>
								<a href='/'>Terms of Service</a>
							</li>
							<li>
								<a href='/'>Privacy Policy</a>
							</li>
							<li>
								<a href='/'>Disclaimer</a>
							</li>
						</ul>
					</Col>

					<Col
						xs={24}
						sm={24}
						md={{ span: 12, order: 2 }}
						lg={{ span: 6, order: 5 }}
						xl={7}
						xxl={7}
					>
						<h2>Subscribe to our newsletter</h2>
						<Form
							name='basic3'
							layout='inline'
							className='newsletter'
							wrapperCol={{
								span: 24,
							}}
							initialValues={{
								remember: true,
							}}
							onFinish={onFinish}
							onFinishFailed={onFinishFailed}
							autoComplete='off'
						>
							<Form.Item
								name='email'
								type='email'
								rules={[
									{
										required: true,
										message: 'Please insert your email',
									},
								]}
							>
								<Input placeholder='Your Email...' />
							</Form.Item>
							<Form.Item
								wrapperCol={{
									offset: 0,
									span: 16,
								}}
							>
								<Button className='newsletter-submit' htmlType='submit'>
									<i className='fa fa-paper-plane'></i>
								</Button>
							</Form.Item>
						</Form>
					</Col>
				</Row>
			</section>

			<section className='footer-disclaimer'>
				<Row align='top' justify='center'>
					<Col span={24}>
						<p>
							Disclaimer: Please be aware that trading stocks, futures, stock
							options, and futures options involves a substantial risk of loss
							and is not suitable for all investors. Past performance is not
							necessarily indicative of future results. Information is for
							general educational and research purposes and should not be
							construed as individual investment advice.
						</p>
					</Col>
				</Row>
			</section>

			<section className='footer-copyright'>
				<Row align='top' justify='center'>
					<Col span={24}>
						<p>Trading App &copy; 2022 Full Stack 2 Team 4</p>
					</Col>
				</Row>
			</section>
		</footer>
	);
}
