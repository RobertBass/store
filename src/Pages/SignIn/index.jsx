import { useContext, useRef } from "react";
import { Layout } from "../../Components/Layout";
import { Context } from "../../Context";
import { Link } from "react-router-dom";

function SignIn() {
  const context = useContext(Context);

  const form = useRef(null);

  const renderLogin = () => {
    return (
      <div className="flex flex-col w-80">
        <p>
          <span className="font-light text-sm">Email: </span>
          <span>{context.account?.email}</span>
        </p>
        <p>
          <span className="font-light text-sm">Password: </span>
          <span>{context.account?.password}</span>
        </p>
        <Link to="/">
          <button
            className="bg-black disabled:bg-black/40 text-white  w-full rounded-lg py-3 mt-4 mb-2"
            onClick={() => context.handleSignIn()}
            disabled={!context.hasUserAnAccount}
          >
            Log in
          </button>
        </Link>
        <div className="text-center">
          <a
            className="font-light text-xs underline underline-offset-4"
            href="/"
          >
            Forgot my password
          </a>
        </div>
        <button
          className="border border-black disabled:text-black/40 disabled:border-black/40
        rounded-lg mt-6 py-3"
          onClick={() => context.setView("create-user")}
          disabled={context.hasUserAnAccount}
        >
          Sign up
        </button>
      </div>
    );
  };

  const renderCreateUser = () => {
    return (
      <form ref={form} className="flex flex-col gap-4 w-80">
        <div className="flex flex-col gap-1">
          <label htmlFor="name" className="font-light text-sm">
            Your Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            defaultValue={context.parsedAccount?.name}
            placeholder="Name"
            className="rounded-lg border border-black placeholder:font-light
          placeholder:text-sm placeholder:text-black/60 focus:outline-none py-2 px-4"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="email" className="font-light text-sm">
            Your Email:
          </label>
          <input
            type="text"
            id="email"
            name="email"
            defaultValue={context.parsedAccount?.email}
            placeholder="your@email.com"
            className="rounded-lg border border-black
          placeholder:font-light placeholder:text-sm placeholder:text-black/60 focus:outline-none py-2 px-4"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="password" className="font-light text-sm">
            Your Password:
          </label>
          <input
            type="password"
            id="password"
            name="password"
            defaultValue={context.parsedAccount?.password}
            placeholder="******"
            className="rounded-lg border border-black
          placeholder:font-light placeholder:text-sm placeholder:text-black/60 focus:outline-none py-2 px-4"
          />
        </div>
        <Link to="/">
          <button
            className="bg-black text-white w-full rounded-lg py-3"
            onClick={() => context.createAnAccount(form)}
          >
            Create
          </button>
        </Link>
        <Link>
          <button
            to="/sign-in"
            className="bg-black text-white w-full rounded-lg py-3"
            onClick={() => context.setView("user-login")}
          >
            Cancel
          </button>
        </Link>
      </form>
    );
  };

  return (
    <Layout>
      <h1 className="font-medium text-xl text-center mb-6 w-80">Welcome</h1>
      {context.renderViewSignIn(renderLogin(), renderCreateUser())}
    </Layout>
  );
}

export { SignIn };
