import { useTheme } from "@mui/material";
import { Box } from "../../../atoms/Box";
import { Typography } from "../../../atoms/Typography";
import CopyText from "../../../molecules/copy-text";

const KeyValuePair = ({
  variables,
}: {
  variables: Array<{
    [key: string]: string;
  }>;
}) => {
  const theme = useTheme();
  return (
    <Box display="flex" flexDirection="column" gap={1.5} mt={3}>
      <Box display="flex" gap={1}>
        <Typography
          variant="subtitle2"
          flex={1}
          color={theme.palette.surface100.main}>
          Key
        </Typography>
        <Typography
          variant="subtitle2"
          flex={1}
          color={theme.palette.surface100.main}>
          Value
        </Typography>
      </Box>
      {variables?.length
        ? variables?.map((variable) => {
            const [key, value] = Object.entries(variable)[0];
            return (
              <Box key={key} display="flex" gap={1}>
                <Box
                  display="flex"
                  alignItems="center"
                  justifyContent="space-between"
                  flex={1}
                  border={1}
                  borderColor={theme.palette.divider}
                  borderRadius={1}
                  p={1}>
                  <Typography
                    variant="subtitle2"
                    flex={1}
                    color={theme.palette.surface100.main}>
                    {key}
                  </Typography>
                  <CopyText text={key} />
                </Box>
                <Box
                  display="flex"
                  alignItems="center"
                  justifyContent="space-between"
                  flex={1}
                  border={1}
                  borderColor={theme.palette.divider}
                  borderRadius={1}
                  p={1}>
                  <Typography
                    variant="subtitle2"
                    flex={1}
                    color={theme.palette.surface100.main}>
                    {value}
                  </Typography>
                  <CopyText text={value} />
                </Box>
              </Box>
            );
          })
        : null}
    </Box>
  );
};

export default KeyValuePair;
