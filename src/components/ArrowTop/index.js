import React, {useState, useEffect} from 'react';
import {Wrapper, Arrow} from './ArrowTop.styles';
import ArrowImg from '../../images/arrowUp.png';

const ArrowTop = () => {
    const [showTopBtn, setShowTopBtn] = useState(false);

    useEffect(() => {
      window.addEventListener('scroll', () => {
        if (window.scrollY > 400) {
          setShowTopBtn(true);
        } else {
          setShowTopBtn(false);
        }
      });
    }, []);

    const goToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <Wrapper>
            {""}
                {showTopBtn && (
                    <Arrow 
                        src={ArrowImg}
                        onClick={goToTop}
                    />
                )}
            {""}
        </Wrapper>
    );
}

export default ArrowTop;