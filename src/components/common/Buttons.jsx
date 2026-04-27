import { Link } from 'react-router-dom';

export function Button({ onClick, className="primary", to, children}) {
    const styles = {
        primary: 'btn-primary',
        secondary: 'btn-secondary'
    };

    if (to) {
        return (
            <Link to={to} className={styles[className]}>
                {children}
            </Link>
        )
    }

    return (
        <button className={styles[className]} onClick={onClick}>
            {children}
        </button>
    );
}
