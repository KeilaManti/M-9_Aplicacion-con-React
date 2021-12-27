import ContentRowMovies from '../components/ContentRowMovies.js';
import LastMovieInDb from '../components/LastMovieInDb.js';
import GenresInDb from '../components/GenresInDb.js';

function ContentRowTop() {
  return (
    <div class="container-fluid">
		<div class="d-sm-flex align-items-center justify-content-between mb-4">
			<h1 class="h3 mb-0 text-gray-800">App Dashboard</h1>
		</div>

		<ContentRowMovies />

		<div class="row">
			<LastMovieInDb />
			<GenresInDb />
		</div>
	</div>
  );
}

export default ContentRowTop;