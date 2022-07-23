import { useSelector, useDispatch } from "react-redux";

const App = () => {
  const anecdotes = useSelector((state) =>
    state.sort((a, b) => b.votes - a.votes)
  );
  const dispatch = useDispatch();

  const voteAnecdote = (anecdoteId) => {
    return {
      data: {
        id: anecdoteId,
      },
      type: "VOTE",
    };
  };

  const createAnecdote = (content) => {
    return {
      data: {
        content,
      },
      type: "CREATE",
    };
  };

  const vote = (id) => {
    console.log("vote", id);
    dispatch(voteAnecdote(id));
  };

  const create = (event) => {
    event.preventDefault();
    const anecdote = event.target.anecdote.value;
    console.log(anecdote);
    dispatch(createAnecdote(anecdote));
  };

  return (
    <div>
      <h2>Anecdotes</h2>
      {anecdotes.map((anecdote) => (
        <div key={anecdote.id}>
          <div>{anecdote.content}</div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote.id)}>vote</button>
          </div>
        </div>
      ))}
      <h2>create new</h2>
      <form onSubmit={create}>
        <div>
          <input name="anecdote" />
        </div>
        <button type="submit">create</button>
      </form>
    </div>
  );
};

export default App;