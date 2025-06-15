export default function Projects() {
  return (
    <section
      className="min-h-screen w-full max-w-3xl mx-auto px-4 sm:px-8 flex flex-col items-start justify-center"
    >
      <h2
        id="projects"
        className="text-3xl mb-10 text-center w-full font-medium"
      >
        Projects
      </h2>

      <div className="grid gap-8 sm:grid-cols-2">
        {/* Project 1 */}
        <div className="rounded-xl border border-blue-300 bg-gradient-to-r from-gray-900 to-gray-800 p-6 shadow-md hover:shadow-lg transition duration-300 flex flex-col justify-between h-full text-left">

          <div>
            <h3 className="text-xl font-medium mb-4 text-center">Study App</h3>
            <p className="text-sm text-white-700 mb-6">
              This is an application for repeated practice of learned content. Users can view topics, create questions and question answer options. Users can take a quiz.
            </p>
          </div>

          <a
            href="https://github.com/emilliukkonen/practiceLearnedContentWebApp"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-gradient-to-r from-blue-400 to-blue-500 text-white rounded-lg hover:from-blue-400 hover:to-blue-600 transition-colors duration-300 self-center"
          >
            View project →
          </a>
        </div>

        {/* Project 2 */}
        <div className="rounded-xl border border-blue-300 bg-gradient-to-r from-gray-900 to-gray-800 p-6 shadow-md hover:shadow-lg transition duration-300 flex flex-col justify-between h-full text-left">
          <div>
            <h3 className="text-xl font-medium mb-4 text-center">Email Spam Filter</h3>
            <p className="text-sm text-white-700 mb-6">
              This project compares the ML methods Logistic Regression and Support Vector Machine for detecting spam emails.
            </p>
          </div>

          <a
            href="https://github.com/emilliukkonen/emailSpamFilter"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-gradient-to-r from-blue-400 to-blue-500 text-white rounded-lg hover:from-blue-400 hover:to-blue-600 transition-colors duration-300 self-center"
          >
            View project →
          </a>
        </div>

        {/* Project 3 */}
        <div className="rounded-xl border border-blue-300 bg-gradient-to-r from-gray-900 to-gray-800 p-6 shadow-md hover:shadow-lg transition duration-300 flex flex-col justify-between h-full text-left">
          <div>
            <h3 className="text-xl font-medium mb-4 text-center">Coming soon</h3>
            <p className="text-sm text-white-700 mb-6">
              More projects coming soon.
            </p>
          </div>

          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-gradient-to-r from-blue-400 to-blue-500 text-white rounded-lg hover:from-blue-400 hover:to-blue-600 transition-colors duration-300 self-center"
          >
            View project →
          </a>
        </div>

        {/* Project 4 */}
        <div className="rounded-xl border border-blue-300 bg-gradient-to-r from-gray-900 to-gray-800 p-6 shadow-md hover:shadow-lg transition duration-300 flex flex-col justify-between h-full text-left">
          <div>
            <h3 className="text-xl font-medium mb-4 text-center">Coming soon</h3>
            <p className="text-sm text-white-700 mb-6">
              More projects coming soon.
            </p>
          </div>

          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-gradient-to-r from-blue-400 to-blue-500 text-white rounded-lg hover:from-blue-400 hover:to-blue-600 transition-colors duration-300 self-center"
          >
            View project →
          </a>
        </div>
      </div>
    </section>
  );
}
