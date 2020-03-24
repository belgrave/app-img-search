import React from 'react';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';
import ImageList from './ImageList';

class App extends React.Component {
    state = { imgs: [] };

    onSearchSubmit = async (term) => {
        const resp = await unsplash.get("/search/photos", {
            params: { query: term }
        });

        this.setState({ imgs: resp.data.results });
    }

    render() {
        return (
            <div className="ui container" style={{ marginTop: '10px' }}>
                <SearchBar onSubmit={this.onSearchSubmit} />
                <ImageList imgs={this.state.imgs} />
            </div>
        );
    }
}

export default App;