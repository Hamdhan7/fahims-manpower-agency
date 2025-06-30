import React from 'react';

const PaymentHold = () => {
    return (
        <div style={styles.container}>
            <h1 style={styles.heading}>Website Temporarily Unavailable</h1>
            <p style={styles.text}>This website has been paused due to non-payment.</p>
            <p style={styles.text}>Once dues are cleared, full access will be restored.</p>
            <p style={styles.footer}>— Darxforge</p>
        </div>
    );
};

const styles = {
    container: {
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        padding: '1rem',
        backgroundColor: '#f5f5f5',
        fontFamily:
            '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif',
    },
    heading: {
        fontSize: '2rem',
        marginBottom: '1rem',
        color: '#333',
    },
    text: {
        fontSize: '1.1rem',
        marginBottom: '0.5rem',
        color: '#555',
    },
    footer: {
        marginTop: '2rem',
        fontStyle: 'italic',
        color: '#999',
    },
};

export default PaymentHold;
