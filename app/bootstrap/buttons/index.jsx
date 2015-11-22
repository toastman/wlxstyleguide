module.exports = React.createClass({
  render() {
    return <div>
        <h2 className="bd-title" id="buttons">Buttons</h2>
        <div>
            <button type="button" className="btn btn-primary">Primary</button
            > <button type="button" className="btn btn-secondary">Secondary</button
            > <button type="button" className="btn btn-success">Success</button
            > <button type="button" className="btn btn-warning">Warning</button
            > <button type="button" className="btn btn-danger">Danger</button
            > <button type="button" className="btn btn-link">Link</button>
        </div>
        <div className="code-wrapper">
            <code>&lt;button type=&quot;button&quot; class=&quot;btn btn-primary&quot;&gt;Primary&lt;/button&gt;</code>
            <code>&lt;button type=&quot;button&quot; class=&quot;btn btn-secondary&quot;&gt;Secondary&lt;/button&gt;</code>
            <code>&lt;button type=&quot;button&quot; class=&quot;btn btn-success&quot;&gt;Success&lt;/button&gt;</code>
        </div>
    </div>
  }
})
