import { Link } from 'react-router-dom';

export function Button({ label, onClick, variant="primary", to}) {
    const styles = {
        primary: 'btn-primary',
        secondary: 'btn-secondary'
    };

    if (to) {
        return (
            <Link to={to} className={styles[variant]}>
                {label}
            </Link>
        )
    }

    return (
        <button className={styles[variant]} onClick={onClick}>
            {label}
        </button>
    );
}
