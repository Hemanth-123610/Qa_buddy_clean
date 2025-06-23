export default function handler(req, res) {
  if (req.method === "POST") {
    res.status(200).json({
      manualTestCases: [
        "Verify that the login form appears",
        "Check if the submit button is clickable",
        "Ensure that required fields show validation errors"
      ],
      automationScript: "driver.findElement(By.id('submit')).click();",
      bugsDetected: [
        "Input field does not have placeholder",
        "Submit button lacks accessible label"
      ]
    });
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
}
