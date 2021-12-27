import react from "react";
import TopBar from '../components/TopBar.js';
import ContentRowTop from '../components/ContentRowTop.js';
import Footer from '../components/Footer.js';

function ContentWrapper() {
  return (
    <div id="content-wrapper" class="d-flex flex-column">
		<div id="content">
			<TopBar />

			<ContentRowTop />
		</div>

		<Footer />
	</div>
  );
}

export default ContentWrapper;