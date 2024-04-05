import React from "react";
import { styled } from "@mui/material/styles";
import { ReactComponent as ExpandIcon } from "../assets/ExpandIcon.svg";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  borderBottom: `2px solid rgba(217, 217, 217, 0.5)`,
  "&:last-child": {
    borderBottom: 0,
  },
  "&::before": {
    display: "none",
  },
  color: `var(--color-white)`,
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary expandIcon={<ExpandIcon />} {...props} />
))(({ theme }) => ({
  backgroundColor: "var(--color-primary)",
  justifyContent: "flex-end",
  "& .MuiIconButton-root": {
    visibility: "visible",
  },
  "& .Mui-expanded svg": {
    visibility: "hidden",
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  backgroundColor: "var(--color-primary)",
}));

export default function CustomizedAccordions({ data }) {
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div>
      {data.map((item, idx) => {
        return (
          <Accordion
            key={`panel${idx+1}`}
            expanded={expanded === `panel${idx+1}`}
            onChange={handleChange(`panel${idx+1}`)}
          >
            <AccordionSummary
              aria-controls={`panel${idx+1}d-content`}
              id={`panel${idx+1}d-header`}
            >
              <Typography>{item.summary}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                {item.content}
              </Typography>
            </AccordionDetails>
          </Accordion>
        );
      })}
    </div>
  );
}
