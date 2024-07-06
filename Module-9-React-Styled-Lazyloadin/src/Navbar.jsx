import styled from "styled-components"
const Logo = styled.div`
    padding : 10px;
    width : 100px
   `
const Nav = styled.div`
    display : flex;
    justify-content : center;
    padding : 20px 0px;
  `
const Nav3 = styled.div`
    display : flex;
    justify-content: space-between;
    width : 40% ;
    font-size : 0.8rem;
`
function Navbar() {
    return (
        <>
            <Nav className="w-1">
                <div className="box">
                <Logo>
                    <img src="data:image/png;base64,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" alt="" />
                </Logo>
                <div className="w-3">
                <input type="search" className="inp-1" />
                <span className="inp-txt f-6">All categories</span>
                <span className="inp-txt1 f-6">Search</span>
                <i className="fa-solid fa-magnifying-glass icon"></i>
                </div>
                <Nav3>
                    <select className="w-4">
                        <option>Your Location</option>
                    </select>
                    <div>
                    <i className="fa-solid fa-code-compare"></i>
                    <span>Compare</span>
                    </div>
                    <div>
                    <i className="fa-regular fa-heart"></i>
                    <span>WishList</span>
                    </div>
                    <div>
                    <i className="fa-solid fa-cart-shopping"></i>
                    <span>Cart</span>
                    </div>
                    <div>
                    <i className="fa-regular fa-user"></i>
                    <span>Accounts</span>
                    </div>
                </Nav3>
                </div>
            </Nav>
        </>
    )
}

export default Navbar