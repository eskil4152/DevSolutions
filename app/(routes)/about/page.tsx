export default function About() {
  return (
    <div className="text-center">
      <h1>Meet the team</h1>
      <div className="flex flex-row justify-center gap-20">
        <div className="w-1/3">
          <p>Eskil</p>
          <br />
          <p>Roles:</p>
          <ul>
            <li>Co-CEO (Chief Executive Officer)</li>
            <li>CTO (Chief Technological Operator)</li>
            <li>Co-Founder</li>
            <br />
            <li>Backend Developer</li>
            <li>Frontend Developer</li>
            <li>Cloud Engineer</li>
          </ul>
        </div>
        <div>
          <p>Mujib</p>
          <br />
          <p>Roles: </p>
          <ul>
            <li>Co-CEO (Chief Executive Officer)</li>
            <li>CMO (Chief Marketing Operator)</li>
            <li>Co-Founder</li>
            <br />
            <li>PR-manager</li>
            <li>Investor</li>
          </ul>
        </div>
        <div className="w-1/3">
          <p>Missing roles: </p>
          <ul>
            <li>COO (Chief Operating Operator)</li>
            <li>CFO (Chief Financial Operator)</li>
            <li>CHRO (Chief Human Resources Operator)</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
