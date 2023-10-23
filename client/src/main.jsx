
import { ChainId, ThirdwebProvider }  from '@thirdweb-dev/react';

import App from "./App";

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <ThirdwebProvider desiredChainId={ChainId.Goerli}>
        <Router>
            <App />
        </Router>

    </ThirdwebProvider>
)