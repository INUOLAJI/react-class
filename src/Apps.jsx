import { Home } from './Home';
import { ContextAPIs } from './lib/ContextAPIs';
import { Messages } from './Messages';

export const Apps = () => {
    return (
        <ContextAPIs>
            <Home />
            <Messages />
        </ContextAPIs>
    )
}