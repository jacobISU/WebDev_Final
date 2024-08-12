import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import 'bootstrap/dist/js/bootstrap.bundle.min';
import "./App.css";
import logo from './images/FireTireLogo.jpg';

export function AllViews() {
    //State variables for managing view index.
    const [viewIndex, setViewIndex] = useState(0);
    const [formData, setFormData] = useState(null);
    const [idToPurchase, setIdToPurchase] = useState(-1);

    const viewOptions = [
        { label: 'Home', component: HomeView },
        { label: 'Store', component: StoreView },
        { label: 'Checkout', component: CheckoutView },
        { label: 'Confirmation', component: ConfirmationView },
        { label: 'Create View', component: CreateView },
        { label: 'Update View', component: UpdateView },
        { label: 'Delete View', component: DeleteView },
        { label: 'Student View', component: StudentView }
    ];

    const handleViewChange = (newIndex) => {
        setViewIndex(newIndex);
    };


    const renderView = () => {
        const CurrentViewComponent = viewOptions[viewIndex].component;
        return <CurrentViewComponent />;
    };

    const items = [
        {
            id: 1,
            image: "https://p1m.mbike.com/001/001/356/Black___White_09_d.jpg",
            fact: "The First Motorcycle Was Made of WOOD!",
        },
        {
            id: 2,
            image: "https://images.pexels.com/photos/2116475/pexels-photo-2116475.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            fact: "On average, motorcycles are about twice as fuel efficient as cars.",
        },
        {
            id: 3,
            image: "https://images.unsplash.com/photo-1503434396599-58ba8a18d932?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c2Nvb3RlcnxlbnwwfHwwfHx8MA%3D%3D",
            fact: "The first Harley Davidson motorcycle, built in 1903, used a tomato soup can for a carburetor.",
        },
        {
            id: 4,
            image: "https://www.themanual.com/wp-content/uploads/sites/9/2021/06/motorcycle-guide-feature-image.jpg?fit=2082%2C1388&p=1",
            fact: "When rounding corners, 75% of a bike's grip comes from the front tire.",
        }
    ];

    function HomeView() {
        const quotes = [
            "10 Reasons you should buy a motorcycle!",
            "Reason 1: Motorcycles make you cool (even if you're not)",
            "Reason 2: A motorcycle skyrockets your feelings of personal power",
            "Reason 3: A motorcycle looks awesome in your house",
            "Reason 4: Motorcycles are all about freedom",
            "Reason 5: A motorcycle transforms your commute",
            "Reason 6: Riding makes you feel 100% alive",
            "Reason 7: Motorcycles are economical",
            "Reason 8: Motorcycles are an investment",
            "Reason 9: Motorcycles make you seem hotter",
            "Reason 10: Motorcycles make you into an explorer"
        ];

        const [currentIndex, setCurrentIndex] = useState(0);

        const handleNext = () => {
            setCurrentIndex((currentIndex + 1) % items.length);
        };

        const handlePrev = () => {
            setCurrentIndex((currentIndex - 1 + items.length) % items.length);
        };

        return (
            <div>
                <div className="Banner">
                    <h1 className="text-center">Firetire</h1>
                </div>

                <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel"
                    style={{ background: "linear-gradient(rgba(1, 0, 0, 1), rgba(0, 0, 0, 0)), url('https://images.unsplash.com/photo-1508197149814-0cc02e8b7f74?q=80&w=1995&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')", backgroundSize: 'cover', backgroundPosition: 'center center' }}>
                    <div className="carousel-indicators">
                        {quotes.map((_, index) => (
                            <button key={index} type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={index} className={index === 0 ? "active" : ""} aria-current={index === 0 ? "true" : undefined} aria-label={`Slide ${index + 1}`}></button>
                        ))}
                    </div>
                    <div className="carousel-inner" style={{ height: '400px' }}>
                        {quotes.map((quote, index) => (
                            <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                                <div className="w-50 mx-auto text-center h-100 d-flex align-items-center justify-content-center quote1">
                                    <p>{quote}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>

                <div className="card-container">
                    <button className="nav-button prev-button" onClick={handlePrev}>
                        <span className="material-icons">chevron_left</span>
                    </button>
                    <div>
                        <h2 className="card-title">FUN FACTS ABOUT MOTORCYCLES</h2>
                        <div className="fact-card" style={{ backgroundImage: `url(${items[currentIndex].image})` }}>
                            <p className="fact-text">{items[currentIndex].fact}</p>
                        </div>
                    </div>
                    <button className="nav-button next-button" onClick={handleNext}>
                        <span className="material-icons">chevron_right</span>
                    </button>
                </div>
                <h1 className="text-center">CHECKOUT OUR ONLINE STORE!</h1>
                <div className="Banner3">
                </div>
                <h1 className="text-center">NEW MOTORCYCLES EVERYDAY!</h1>
                <div className="d-flex justify-content-center">
                    <button className="btn btn-warning mb-3" onClick={() => handleViewChange(1)}>
                        Go to Store
                    </button>
                </div>
                <div className="Banner2">
                    <h1 className="text-center"></h1>
                </div>
            </div>
        );
    }

    function StoreView() {
        const [products, setProducts] = useState([]);
        const [productId, setProductId] = useState('');
        const [selectedProduct, setSelectedProduct] = useState(null);
        const [checkoutProduct, setCheckoutProduct] = useState(null);
        const [selectedCategories, setSelectedCategories] = useState([]);
        const [category, setCategory] = useState('');

        useEffect(() => {
            fetch("http://localhost:8081/listProducts")
                .then(response => {
                    if (!response.ok) throw new Error('Failed to fetch products');
                    return response.json();
                })
                .then(setProducts)
                .catch(error => {
                    console.error('Error:', error);
                })
        }, []);

        useEffect(() => {
            // Ensure that we do not make a request with an empty category
            const url = `http://localhost:8081/listProducts/${category}`

            console.log(url)
            fetch(url)
                .then(response => {
                    if (!response.ok) throw new Error('Failed to fetch products');
                    return response.json();
                })
                .then(data => setProducts(data))
                .catch(error => {
                    console.error('Error:', error);
                });
        }, [category]);


        const handleCheckout = (product) => {
            setCheckoutProduct(product);
        };

        const handleCategoryChange = (event) => {
            setCategory(event.target.value); // Update the category state
        };

        const filteredProducts = products.filter(product =>
            selectedCategories.length === 0 || selectedCategories.includes(product.type)
        );

        function saveProduct(productToBuy) {
            setIdToPurchase(productToBuy)
            handleViewChange(2)
        }

        return (
            <div className="text-gold-500 appBackground">
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <div className="filterBar2">
                        <select value={category} onChange={handleCategoryChange} className="form-select">
                            <option value="">All Categories</option>
                            <option value="Sport">Sport</option>
                            <option value="Normal">Standard</option>
                            <option value="Scooter">Scooter</option>
                            <option value="Cruiser">Cruiser</option>
                        </select>
                    </div>
                </div>
                <br></br>
                <div className="row justify-content-center text-gold-500">
                    {products.map(product => (
                        <div key={product.id} className="col-md-4 mb-4">
                            <div className="card h-100 blackmatte" style={{ border: '1px solid yellow' }}>
                                <div className="card-body d-flex flex-column align-items-center text-white">
                                    <h5 className="card-title text-uppercase text-center price-text">{product.model}</h5>
                                    <img src={product.image} alt={product.name} className="img-fluid my-2 image-fixed-size" />
                                    <div className="mt-3" style={{ backgroundColor: "rgba(0, 0, 0, 0.7)", border: "5px solid yellow", height: 300, width: 500 }}>
                                        <p className="info-text">Seller: {product.name}</p>
                                        <p className="info-text">Contact: {product.contact}</p>
                                        <p className="info-text">Type: {product.type}</p>
                                        <p className="info-text">Description: {product.desc}</p>
                                    </div>
                                    <div className="w-100 p-3 text-center bg-gold-500 text-yellow-500">
                                        <span className="price-text">${product.price}</span>
                                    </div>
                                    <button className="btn btn-warning mb-3" onClick={() => saveProduct(product.id)}>
                                        BUY NOW
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    }

    function CheckoutView() {
        const [product, setProduct] = useState(null);
        const [name, setName] = useState('');
        const [address, setAddress] = useState('');
        const [city, setCity] = useState('');
        const [state, setState] = useState('');
        const [zipcode, setZipcode] = useState('');
        const [creditCard, setCreditCard] = useState('');

        useEffect(() => {
            console.log("Checkoutview " + idToPurchase)
            if (idToPurchase !== -1) {
                fetch(`http://localhost:8081/${idToPurchase}`, {
                    method: 'GET',
                    headers: { 'Content-type': 'application/json' },
                })
                    .then(response => {
                        if (!response.ok) {
                            throw new Error('Product not found');
                        }
                        return response.json();
                    })
                    .then(data => {
                        setProduct(data);
                    })
                    .catch(error => {
                        console.error('Error fetching product:', error);
                    });
            }
        }, [idToPurchase]);

        if (!product) return <div className="price-text">Your cart is empty! Go check out the store for some good offers!</div>;

        const handleSubmit = event => {
            event.preventDefault();
            // Check if all fields are filled
            if (name && address && city && state && zipcode && creditCard) {
                setViewIndex(3); // Navigate to ConfirmationView (assuming it is at index 3)
            } else {
                alert('Please fill out all fields correctly.');
            }
        };

        return (
            <div style={{ padding: '20px' }}>
                <h3 className="yellowText center">Proceed With Checkout.</h3>
                <div className="line-across"></div>
                <h2 className="price-text mt-3" style={{ marginLeft: '275px' }}>Model: {product.model}</h2>
                <div style={{ display: 'flex', alignItems: 'center', marginLeft: '275px' }}>
                    <img src={product.image} alt={product.model} style={{ width: '100%', maxWidth: '400px', border: '4px solid red', marginRight: '20px' }} />
                    <div>
                        <p className="yellowText"><strong>Description:</strong> {product.desc}</p>
                        <p className="yellowText"><strong>Price:</strong> ${product.price}</p>
                        <p className="yellowText"><strong>Seller:</strong> {product.name}</p>
                        <p className="yellowText"><strong>Contact:</strong> {product.contact}</p>
                        <p className="yellowText"><strong>Type:</strong> {product.type}</p>
                    </div>
                </div>
                <div className="line-across mt-5"></div>
                <div className="container mt-5">
                    <h2 className="price-text">Payment Details</h2>
                    <form onSubmit={handleSubmit} style={{ backgroundImage: "url(https://images.pexels.com/photos/10235226/pexels-photo-10235226.jpeg?auto=compress&cs=tinysrgb&w=600)", backgroundSize: 'cover' }}>
                        <div className="form-group">
                            <label htmlFor="name">Name:</label>
                            <input type="text" className="form-control" id="name" value={name} onChange={e => setName(e.target.value)} required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="address">Address:</label>
                            <input type="text" className="form-control" id="address" value={address} onChange={e => setAddress(e.target.value)} required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="city">City:</label>
                            <input type="text" className="form-control" id="city" value={city} onChange={e => setCity(e.target.value)} required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="state">State:</label>
                            <input type="text" className="form-control" id="state" value={state} onChange={e => setState(e.target.value)} required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="zipcode">Zipcode:</label>
                            <input type="number" className="form-control" id="zipcode" value={zipcode} onChange={e => setZipcode(e.target.value)} required pattern="\\d{5}" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="credit-card">Credit Card Number:</label>
                            <input type="number" className="form-control" id="credit-card" value={creditCard} onChange={e => setCreditCard(e.target.value)} required pattern="\\d{16}" />
                        </div>
                        <button type="submit" className="btn btn-success mt-4">Submit</button>
                        <button className="btn btn-danger mt-4" style={{ width: 80, height: 40 }} onClick={() => handleViewChange(1)}>Cancel</button>
                    </form>
                </div>
                <div className="line-across mt-5"></div>
            </div>
        );
    }

    function ConfirmationView() {
        const [product, setProduct] = useState(null);
        const generateConfirmationNumber = () => {
            return Math.floor(10000 + Math.random() * 90000);  // Ensures a number between 10000 and 99999
        };

        const [confirmationNumber, setConfirmationNumber] = useState(generateConfirmationNumber());

        useEffect(() => {
            fetch(`http://localhost:8081/${idToPurchase}`)
                .then(response => response.json())
                .then(data => setProduct(data))
                .catch(error => console.error('Failed to fetch product:', error));
        }, [idToPurchase]);


        if (!product) return <div>Loading product details...</div>;

        const handleContinueShopping = () => {
            setIdToPurchase(-1);
            setViewIndex(1); // Assuming the store view is at index 1
        };
        return (
            <div>
                <div style={{ padding: '20px', border: '1px solid orange', textAlign: 'center', maxWidth: '600px', margin: 'auto', backgroundColor: 'rgba(255, 0, 0, 0.2)', borderRadius: '10px' }}>
                    <h1>Confirmation #{confirmationNumber}</h1>
                    <div className="line-across"></div>
                    <h2>Thank you for shopping at Firetire!</h2>
                    <p>The seller <strong className="yellowText">{product.name}</strong> would like to thank you for your purchase of</p>
                    <img src={product.image} alt={product.model} style={{ width: '100%', maxWidth: '200px', margin: '20px auto', display: 'block', border: '2px solid orange' }} />
                    <div>
                        <p><strong>Date:</strong> {new Date().toLocaleDateString()}</p>
                        <p><strong>Product:</strong> {product.model}</p>
                        <p><strong>Total:</strong> ${product.price}</p>
                    </div>
                    <p>If you have not received your purchase within 5 to 10 business days, please reach out to the seller. An email will be sent with this information. <br /> Firetire is responsible for nothing and will admit nothing.</p>
                </div>
                <div style={{ textAlign: 'center', marginTop: '20px' }}>
                    <button className="btn btn-warning" style={{ fontSize: '20px', padding: '10px 20px' }} onClick={handleContinueShopping}>Continue Shopping</button>
                </div>
            </div>
        );
    }

    function CreateView() {
        const [id, setId] = useState('12');
        const [price, setPrice] = useState('9999');
        const [model, setModel] = useState('B100');
        const [type, setType] = useState('Sport');
        const [name, setName] = useState('Unknown');
        const [image, setImageUrl] = useState('https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Left_side_of_Flying_Pigeon.jpg/1200px-Left_side_of_Flying_Pigeon.jpg');
        const [contact, setContact] = useState('555-555-5164');
        const [desc, setDescription] = useState('These values are automatic to save time. Can change any of them to whatever you desire.');

        const handleSubmit = async () => {
            if (!id || !price || !model || !type || !name || !image || !contact || !desc) {
                alert("All fields are required.");
                return;
            }

            // Construct the document
            const newDocument = {
                id: parseInt(id),
                price: parseFloat(price),
                model,
                type,
                name,
                image,
                contact,
                desc
            };

            // POST request
            try {
                const response = await fetch('http://localhost:8081/addProduct', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(newDocument)
                });

                if (response.ok) {
                    const jsonResponse = await response.json();
                    console.log('Success:', jsonResponse);
                    alert("Product added successfully!");
                    // Reset the form here
                    setId('');
                    setPrice('');
                    setModel('');
                    setType('');
                    setName('');
                    setImageUrl('');
                    setContact('');
                    setDescription('');
                    handleViewChange(1)
                } else {
                    throw new Error('Failed to submit product: ' + response.statusText);
                }
            } catch (error) {
                console.error('Submission failed:', error);
                alert("Failed to submit product. Please try again.");
            }
        };

        return (
            <div className="" style={{ backgroundColor: 'black', padding: '20px', minHeight: '100vh' }}>
                <div className="inputCard" style={{ width: '800px', maxWidth: '100%', backgroundImage: "url(https://images.pexels.com/photos/10235226/pexels-photo-10235226.jpeg?auto=compress&cs=tinysrgb&w=600)" }}>
                    <div className="cardTitleCenter price-text">Add New Motorcycle</div>
                    <div className="cardTitleCenter"><strong>FEEL FREE TO CHANGE ANY INPUTS!</strong></div>
                    <div className="card-body">
                        <form>
                            <div className="mb-3">
                                <label className="form-label text-white">ID</label>
                                <input type="number" className="form-control" style={{ border: '3px solid black' }} value={id} onChange={e => setId(e.target.value)} required />
                            </div>
                            <div className="mb-3">
                                <label className="form-label text-white">Price</label>
                                <input type="text" className="form-control" style={{ border: '3px solid black' }} min="0" step="0.1" value={price} onChange={e => setPrice(e.target.value)} required />
                            </div>
                            <div className="mb-3">
                                <label className="form-label text-white">Model</label>
                                <input type="text" className="form-control" style={{ border: '3px solid black' }} value={model} onChange={e => setModel(e.target.value)} required />
                            </div>
                            <div className="mb-3">
                                <label className="form-label text-white">Type</label>
                                <select className="form-control" style={{ border: '3px solid black' }} value={type} onChange={e => setType(e.target.value)} required>
                                    <option value="" disabled>Select a type</option>
                                    <option value="Scooter">Scooter</option>
                                    <option value="Standard">Standard</option>
                                    <option value="Sport">Sport</option>
                                    <option value="Cruiser">Cruiser</option>
                                </select>
                            </div>
                            <div className="mb-3">
                                <label className="form-label text-white">Seller</label>
                                <input type="text" className="form-control" style={{ border: '3px solid black' }} value={name} onChange={e => setName(e.target.value)} required />
                            </div>
                            <div className="mb-3">
                                <label className="form-label text-white">Image URL</label>
                                <input type="text" className="form-control" style={{ border: '3px solid black' }} value={image} onChange={e => setImageUrl(e.target.value)} required />
                            </div>
                            <div className="mb-3">
                                <label className="form-label text-white">Contact</label>
                                <input type="text" className="form-control" style={{ border: '3px solid black' }} value={contact} onChange={e => setContact(e.target.value)} required />
                            </div>
                            <div className="mb-3">
                                <label className="form-label text-white">Description</label>
                                <textarea className="form-control" style={{ border: '3px solid black' }} rows="3" value={desc} onChange={e => setDescription(e.target.value)} required />
                            </div>
                            <div className="bb-3 card-footer cardTitleCenter">
                                <button type="button" onClick={handleSubmit} className="yellowButton">Submit Product</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }

    function UpdateView() {
        const [productId, setProductId] = useState('');
        const [selectedProduct, setSelectedProduct] = useState(null);
        const [updatedPrice, setUpdatedPrice] = useState('');

        const showProductById = () => {
            if (!productId) {
                alert("Please enter a valid Product ID");
                return;
            }
            fetch(`http://localhost:8081/${productId}`, {
                method: 'GET',
                headers: { 'content-type': 'application/json' },
            })
                .then(response => {
                    if (!response.ok) throw new Error('Product not found');
                    return response.json();
                })
                .then(data => {
                    setSelectedProduct(data);
                    setUpdatedPrice(data.price);
                })
                .catch(error => {
                    console.error('Error fetching product:', error);
                    alert(error.message);
                    setSelectedProduct(null);
                });
        };

        const updateProductPrice = () => {
            if (!productId || isNaN(parseFloat(updatedPrice))) {
                alert("Invalid product ID or price");
                return;
            }

            const updatedData = {
                price: parseFloat(updatedPrice)
            };

            console.log("Frontend updatedPrice: " + updatedPrice);

            fetch(`http://localhost:8081/updateProduct/${productId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(updatedData)
            })
                .then(response => {
                    if (!response.ok) {
                        return response.json().then(errorData => {

                        });
                    }
                    return response.json();
                })
                .then(data => {
                    console.log("Server response data:", data);
                    setSelectedProduct(data);
                    alert("Price updated successfully");
                    handleViewChange(1)
                })
                .catch(error => {
                });
        };

        return (
            <div className="text-gold-500 appBackground" style={{ backgroundColor: 'black', padding: '20px', minHeight: '100vh' }}>
                <div className="row justify-content-center">
                    <div className="col-md-6 d-flex flex-column align-items-center">
                        <input
                            type="number"
                            value={productId}
                            onChange={e => setProductId(e.target.value)}
                            placeholder="Enter Product ID"
                            className="form-control"
                            min="1"
                            style={{ width: '300px' }}
                        />
                        <button onClick={showProductById} className="yellowButton">Get Product To Update</button>
                        {selectedProduct && (
                            <>
                                <div className="card my-3 w-1200 mx-auto blackmatte" style={{ border: '2px solid yellow' }}>
                                    <div className="card-body">
                                        <h4 className="yellowText text-center">ID#: {selectedProduct.id}</h4>
                                        <h5 className="cardText text-center">Category: {selectedProduct.category}</h5>
                                        <h5 className="cardText text-center">{selectedProduct.title}</h5>
                                        <div className="text-center" style={{ display: 'flex', justifyContent: 'center' }}>
                                            <img src={selectedProduct.image} alt={selectedProduct.title} className="img-fluid" style={{ maxWidth: 100, maxHeight: 200 }} />
                                        </div>
                                        <p className="card-text cardText text-center">{selectedProduct.desc}</p>
                                        <p className="card-text price-text text-center"><small>Price: ${selectedProduct.price.toFixed(2)}</small></p>
                                        {selectedProduct.rating && (
                                            <div className="text-center">
                                                <h4 className="price-text">Rating</h4>
                                                <p className="cardText">Rate: {selectedProduct.rating.rate} out of 5</p>
                                                <p className="cardText">Count: {selectedProduct.rating.count} reviews</p>
                                            </div>
                                        )}
                                    </div>
                                </div>
                                <div className="d-flex justify-content-center align-items-center">

                                </div>
                            </>
                        )}
                        {selectedProduct && (

                            <div className="card my-3 w-100 mx-auto blackmatte" style={{ border: '2px solid yellow' }}>
                                <div className="card-body">
                                    <h4 className="yellowText text-center">Update Price for Product ID: {selectedProduct.id}</h4>
                                    <label>Current Price: ${selectedProduct.price.toFixed(2)}</label>
                                    <input
                                        type="number"
                                        value={updatedPrice}
                                        onChange={e => setUpdatedPrice(e.target.value)}
                                        className="form-control"
                                        min="0.01"
                                        step="0.01"
                                        style={{ width: '300px' }}
                                    />
                                    <button onClick={updateProductPrice} className="btn btn-success mt-3">Update Price</button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        );
    }

    function DeleteView() {
        const [productId, setProductId] = useState('');
        const [selectedProduct, setSelectedProduct] = useState(null);
        const [showConfirm, setShowConfirm] = useState(false);

        const showProductById = () => {
            if (!productId) {
                alert("Please enter a valid Product ID");
                return;
            }
            fetch(`http://localhost:8081/${productId}`, {
                method: 'GET',
                headers: { 'content-type': 'application/json' },
            })
                .then(response => {
                    if (!response.ok) throw new Error('Product not found');
                    return response.json();
                })
                .then(data => {
                    setSelectedProduct(data);
                    setShowConfirm(false);
                })
                .catch(error => {
                    console.error('Error fetching product:', error);
                    alert(error.message);
                    setSelectedProduct(null);
                });
        };

        const deleteProduct = () => {
            fetch(`http://localhost:8081/deleteProduct/${productId}`, {
                method: 'DELETE',
                headers: { 'content-type': 'application/json' },
            })
                .then(response => {
                    if (!response.ok) throw new Error('Failed to delete the product');
                    alert('Product deleted successfully!');
                    setSelectedProduct(null);
                    setProductId('');
                    handleViewChange(1)
                })
                .catch(error => {
                    console.error('Error deleting product:', error);
                    alert(error.message);
                });
        };

        return (
            <div className="text-gold-500 appBackground" style={{ backgroundColor: 'black', padding: '20px', minHeight: '100vh' }}>
                <div className="row justify-content-center">
                    <div className="col-md-6 d-flex flex-column align-items-center">
                        <input
                            type="number"
                            value={productId}
                            onChange={e => setProductId(e.target.value)}
                            placeholder="Enter Product ID"
                            className="form-control"
                            min="1"
                            style={{ width: '300px' }}
                        />
                        <button onClick={showProductById} className="yellowButton">Get Product To Delete</button>

                        {selectedProduct && (
                            <>
                                <div className="card my-3 w-1200 mx-auto blackmatte" style={{ border: '2px solid yellow' }}>
                                    <div className="card-body">
                                        <h4 className="yellowText text-center">ID#: {selectedProduct.id}</h4>
                                        <h5 className="cardText text-center">Category: {selectedProduct.category}</h5>
                                        <h5 className="cardText text-center">{selectedProduct.title}</h5>
                                        <div className="text-center" style={{ display: 'flex', justifyContent: 'center' }}>
                                            <img src={selectedProduct.image} alt={selectedProduct.title} className="img-fluid" style={{ maxWidth: 100, maxHeight: 200 }} />
                                        </div>
                                        <p className="card-text cardText text-center">{selectedProduct.description}</p>
                                        <p className="card-text price-text text-center"><small>Price: ${selectedProduct.price.toFixed(2)}</small></p>
                                        {selectedProduct.rating && (
                                            <div className="text-center">
                                                <h4 className="price-text">Rating</h4>
                                                <p className="cardText">Rate: {selectedProduct.rating.rate} out of 5</p>
                                                <p className="cardText">Count: {selectedProduct.rating.count} reviews</p>
                                            </div>
                                        )}
                                    </div>
                                </div>
                                <div className="d-flex justify-content-center align-items-center">
                                    <div className="text-center">
                                        <h7>Are you sure you want to delete product number {selectedProduct.id}?</h7>
                                        <button onClick={deleteProduct} className="btn btn-danger mt-3 ml-4" style={{ marginLeft: '16px' }}>Yes</button>
                                    </div>
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </div>
        );

    }

    function StudentView() {
        return (
            <div className="text-gold-500 appBackground" style={{}}>
                <div className="inputCard" style={{ backgroundImage: "url(https://images.pexels.com/photos/10235226/pexels-photo-10235226.jpeg?auto=compress&cs=tinysrgb&w=600)" }}>
                    <div
                        style={{
                            backgroundColor: 'rgba(0, 0, 0, 0.8)', //black 70% opacity
                            color: 'white',
                            padding: '20px',
                            borderRadius: '10px',
                            maxWidth: '800px',
                            margin: 'auto',
                            textAlign: 'center'
                        }}
                    >
                        <div className="cardTitleCenter">About</div>
                        <div className="card-body"></div>
                        <h1 className="text-4xl font-bold mb-4 yellowText center">Spring 2024</h1>
                        <h3 className="text-2xl mb-2 yellowText center">Jacob Smith</h3>
                        <h4 className="text-xl mb-2 yellowText center">jksmith7@iastate.edu</h4>
                        <br></br><br></br>
                        <h3 className="text-2xl mb-2 yellowText center">COMS 319</h3>
                        <h3 className="text-2xl mb-2 yellowText center">Software Construction and User Interfaces</h3>
                        <h3 className="text-2xl mb-2 yellowText center">April 27, 2024</h3>
                        <h3 className="text-2xl mb-2 yellowText center">Ali Jannesari, Ph.D.</h3>
                        <br></br><br></br>

                        <h6 className="text-2xl mb-2 center">About our project:</h6>
                        <p className="text-yellow-300 yellowText center">
                            My project uses a drop-down menu across all <br></br>views provided by the return of the function holding all the views.<br></br>
                            Each View is its own function that connects to the Mongo server <br></br> if needed and performs the backend functions necessary to complete a specific query.<br></br>
                            I use a blend of CSS, Bootstrap, and Tailwind to stylize the pages <br></br> utilizing the colors black and yellow.
                        </p>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <img src={logo} alt="Logo" style={{ width: '150px', marginRight: '-30px' }} />
                <h1 style={{ fontSize: '35px', fontWeight: 'bold', marginRight: '250px' }}>Firetire</h1>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start' }}>
                    {viewOptions.map((option, idx) => {
                        if (option.label !== "Confirmation") { // This prevents the Confirmation button from being rendered
                            return (
                                <button
                                    key={idx}
                                    className={`px-4 py-2 mx-2 rounded ${idx === viewIndex ? "bg-blue-500" : "bg-gray-700 hover:bg-gray-600"}`}
                                    onClick={() => handleViewChange(idx)}
                                >
                                    {option.label}
                                </button>
                            );
                        }
                        return null; // Do not return a button for the Confirmation view
                    })}
                </div>
            </div>
            {renderView()}
            <footer className="footer">
                Created by: Jacob Smith<br></br>
                COMS 319 - Final Project<br></br>
                © 2024 Firetire. All rights reserved.
            </footer>
        </div>
    );
}