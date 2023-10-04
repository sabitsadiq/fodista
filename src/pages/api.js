export default async function handler(req, res) {
  try {
    const phone = req.query.phone;

    // Make the API call to subscribe the phone

    const response = await fetch(
      `https://sys.brandimic.com/api/method/fodistademo?phone=${phone}`
    );

    console.log(response);
    // Send a JSON response
    res.status(200).json({ message: req.query.phone });
  } catch (error) {
    // Handle any error that occurred during the API request
    console.error("Error handling API request:", error);
    res.status(500).json({ message: "Server Error" });
  }
}
