// flow
import React, { Component } from 'react';
import { Row, Col, Card, CardBody } from 'reactstrap';
import { Link } from 'react-router-dom';

import PageTitle from '../../../components/PageTitle';

import productImg1 from '../../../assets/images/products/product-5.jpg';
import productImg2 from '../../../assets/images/products/product-1.jpg';
import productImg3 from '../../../assets/images/products/product-3.jpg';
import productImg4 from '../../../assets/images/products/product-2.jpg';

// summary
const CartSummary = props => {
    const summary = props.summary || {};

    return (
        <React.Fragment>
            <div className="border p-3 mt-4 mt-lg-0 rounded">
                <h4 className="header-title mb-3">Order Summary</h4>

                <div className="table-responsive">
                    <table className="table mb-0">
                        <tbody>
                            <tr>
                                <td>Grand Total :</td>
                                <td>${summary.gross_total.toFixed(2)}</td>
                            </tr>
                            <tr>
                                <td>Discount : </td>
                                <td>-${summary.discount.toFixed(2)}</td>
                            </tr>
                            <tr>
                                <td>Shipping Charge :</td>
                                <td>${summary.shipping_charge.toFixed(2)}</td>
                            </tr>
                            <tr>
                                <td>Estimated Tax : </td>
                                <td>${summary.tax.toFixed(2)}</td>
                            </tr>
                            <tr>
                                <th>Total :</th>
                                <th>${summary.net_total.toFixed(2)}</th>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <div className="alert alert-warning mt-3" role="alert">
                Use coupon code <strong>HYPBM</strong> and get 10% discount!
            </div>

            <div className="input-group mt-3">
                <input
                    type="text"
                    className="form-control form-control-light"
                    placeholder="Coupon code"
                    aria-label="Recipient's username"
                />
                <div className="input-group-append">
                    <button className="btn btn-light" type="button">
                        Apply
                    </button>
                </div>
            </div>
        </React.Fragment>
    );
};

// Cart
class Cart extends Component {
    constructor(props) {
        super(props);

        this.state = {
            items: [
                {
                    id: 1,
                    image: productImg2,
                    name: '거창 꿀사과',
                    size: '3kg',
                    color: 'Light Green',
                    price: 10000,
                    qty: 1,
                    total: 743.3,
                },
                {
                    id: 2,
                    image: productImg4,
                    name: '수박',
                    size: 'Small',
                    color: 'Brown',
                    price: 99,
                    qty: 2,
                    total: 198.0
                },
                {
                    id: 3,
                    image: productImg3,
                    name: '복숭아',
                    size: 'Medium',
                    color: 'Green',
                    price: 49.99,
                    qty: 3,
                    total: 499.9,
                },
                {
                    id: 4,
                    image: productImg1,
                    name: '포도',
                    size: 'Large',
                    color: 'Orange',
                    price: 129.99,
                    qty: 1,
                    total: 129.99,
                },
            ],
            summary: {
                gross_total: 1571.19,
                discount: 157.11,
                shipping_charge: 25,
                tax: 19.22,
                net_total: 1458.3,
            },
        };

        this.onQtyChange = this.onQtyChange.bind(this);
        this.removeItem = this.removeItem.bind(this);
    }

    /**
     * On quantity changed
     */
    onQtyChange = (e, item) => {
        var items = [...this.state.items];
        var idx = items.findIndex(i => i.id === item.id);
        var newQty = e.target.value;
        var newTotal = items[idx].price * newQty;
        items[idx] = { ...item, qty: newQty, total: newTotal };
        this._adjustCart(items);
    };

    /**
     * Removes item from cart
     */
    removeItem = (e, item) => {
        e.preventDefault();
        var items = this.state.items.filter(i => i.id !== item.id);
        this._adjustCart(items);
    };

    /**
     * Adjust the cart
     */
    _adjustCart = items => {
        // calculate gross and other total
        var newGrossTotal = 0;
        for (const item of items) {
            newGrossTotal += item.total;
        }
        var newNetTotel =
            newGrossTotal - this.state.summary.discount + this.state.summary.shipping_charge + this.state.summary.tax;
        this.setState({
            items: items,
            summary: { ...this.state.summary, gross_total: newGrossTotal, net_total: newNetTotel },
        });
    };

    render() {
        return (
            <React.Fragment>
                <PageTitle
                    breadCrumbItems={[
                        { label: 'eCommerce', path: '/apps/ecommerce/shopping-cart' },
                        { label: 'Cart', path: '/apps/ecommerce/shopping-cart', active: true },
                    ]}
                    title={'Shopping Cart'}
                />

                <Row>
                    <Col>
                        <Card>
                            <CardBody>
                                <Row>
                                    <Col lg={8}>
                                        <div className="table-responsive">
                                            <table className="table table-borderless table-centered mb-0">
                                                <thead className="thead-light">
                                                    <tr>
                                                        <th>Product</th>
                                                        <th>Price</th>
                                                        <th>Quantity</th>
                                                        <th>Total</th>
                                                        <th style={{ width: '50px' }}></th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {this.state.items.map((item, idx) => {
                                                        return (
                                                            <tr key={idx}>
                                                                <td>
                                                                    <img
                                                                        src={item.image}
                                                                        alt={item.name}
                                                                        title="contact-img"
                                                                        className="rounded mr-3"
                                                                        height="64"
                                                                    />

                                                                    <p className="m-0 d-inline-block align-middle font-16">
                                                                        <Link to="/" className="text-body">
                                                                            {item.name}
                                                                        </Link>
                                                                        <br />
                                                                        <small className="mr-2">
                                                                            <b>Size:</b> {item.size}{' '}
                                                                        </small>
                                                                        <small>
                                                                            <b>Color:</b> {item.color}{' '}
                                                                        </small>
                                                                    </p>
                                                                </td>
                                                                <td>${item.price.toFixed(2)}</td>
                                                                <td>
                                                                    <input
                                                                        type="number"
                                                                        min="1"
                                                                        value={item.qty}
                                                                        className="form-control"
                                                                        placeholder="Qty"
                                                                        style={{ width: '90px' }}
                                                                        onChange={e => {
                                                                            this.onQtyChange(e, item);
                                                                        }}
                                                                    />
                                                                </td>
                                                                <td>${item.total.toFixed(2)}</td>
                                                                <td>
                                                                    <Link
                                                                        to="/"
                                                                        className="action-icon"
                                                                        onClick={e => {
                                                                            this.removeItem(e, item);
                                                                        }}>
                                                                        {' '}
                                                                        <i className="mdi mdi-delete"></i>
                                                                    </Link>
                                                                </td>
                                                            </tr>
                                                        );
                                                    })}
                                                </tbody>
                                            </table>
                                        </div>

                                        <div className="mt-3">
                                            <label htmlFor="example-textarea">Add a Note:</label>
                                            <textarea
                                                className="form-control"
                                                id="example-textarea"
                                                rows="3"
                                                placeholder="Write some note.."></textarea>
                                        </div>

                                        <Row className="mt-4">
                                            <Col sm={6}>
                                                <a
                                                    href="/"
                                                    className="btn text-muted d-none d-sm-inline-block btn-link font-weight-semibold">
                                                    <i className="mdi mdi-arrow-left"></i> Continue Shopping{' '}
                                                </a>
                                            </Col>
                                            <Col sm={6}>
                                                <div className="text-sm-right">
                                                    <a href="/" className="btn btn-danger">
                                                        <i className="mdi mdi-cart-plus mr-1"></i> Checkout{' '}
                                                    </a>
                                                </div>
                                            </Col>
                                        </Row>
                                    </Col>

                                    <Col lg={4}>
                                        <CartSummary summary={this.state.summary} />
                                    </Col>
                                </Row>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </React.Fragment>
        );
    }
}

export default Cart;
